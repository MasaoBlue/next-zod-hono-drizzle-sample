"use client";

import { Stack } from "@/_common/mantine/core";
import { apiClient } from "@/lib/apiClient";
import { InferResponseType } from "hono/client";

type Props = {
  todoList: InferResponseType<typeof apiClient.todo.$get>;
};

export default function SuspenceComponent({ todoList }: Props) {
  return <Stack>{todoList.length}</Stack>;
}
