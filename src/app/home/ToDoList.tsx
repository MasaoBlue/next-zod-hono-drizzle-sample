import ToDoList_Client from "@/app/home/ToDoList.client";
import { Database } from "@/lib/database.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export default async function ToDoList() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });

  const todoList = await supabase
    .from("todo")
    .select()
    .order("created_at", { ascending: false });

  if (!todoList.data) {
    return <div>Error occured: {todoList.error.details}</div>;
  }

  return (
    <div>
      <div>{todoList.data.length} 件</div>
      {/* @ts-expect-error Async Server Component */}
      <ToDoList_Client todoList={todoList.data} />
    </div>
  );
}
