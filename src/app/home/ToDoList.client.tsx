"use client";

import { List } from "@/_common/mantine/core";
import { apiClient } from "@/lib/apiClient";
import { InferResponseType } from "hono/client";

type Props = {
  todoList: InferResponseType<typeof apiClient.todo.$get>;
};

export default async function ToDoList_Client({ todoList }: Props) {
  return (
    <List>
      {todoList.map((todo) => (
        <List.Item key={todo.id}>{todo.task}</List.Item>
      ))}
    </List>
  );
}
