import { createSupabaseClient } from "@/app/api/_shared/createSupabaseClient";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const router = new Hono()
  .get("/todo", async (c) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase.from("todo").select();

    if (error) {
      throw error;
    }

    return c.jsonT(data);
  })
  .post(
    "/todo",
    zValidator(
      "json",
      z.object({
        task: z.string(),
      })
    ),
    async (c) => {
      const supabase = createSupabaseClient();
      const supabaseUser = await supabase.auth.getUser();

      if (supabaseUser.error) {
        throw supabaseUser.error;
      }

      const todo = await c.req.valid("json");
      console.log("todo?", todo);
      const insertedTodo = await supabase.from("todo").insert({
        ...todo,
        user_id: supabaseUser.data.user.id,
      });

      if (insertedTodo.error) {
        throw insertedTodo.error;
      }

      c.status(204);
      return c.body(null);
    }
  );
