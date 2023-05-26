import { Database } from "@/lib/database.types";
import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export const createSupabaseClient = () => {
  return createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });
};
