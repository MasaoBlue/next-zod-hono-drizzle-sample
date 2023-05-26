"use client";

import { Stack } from "@/_common/mantine/core";
import { apiClient } from "@/lib/apiClient";
import { InferResponseType } from "hono/client";
import { useState } from "react";

export default function SuspenceComponent() {
  const [todoList, setTodoList] =
    useState<InferResponseType<typeof apiClient.todo.$get>>();

  if (!todoList) {
    throw apiClient.todo
      .$get()
      .then(async (r) => {
        return await new Promise<typeof r>((resolve) =>
          setTimeout(() => resolve(r), 3000)
        );
      })
      .then(async (r) => {
        setTodoList(await r.json());
      });
  }

  return <Stack>{todoList.length}</Stack>;
}
