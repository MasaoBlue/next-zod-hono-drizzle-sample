import { Stack } from "@/_common/mantine/core";
import ToDoAddForm from "@/app/home/ToDoAddForm";
import ToDoList from "@/app/home/ToDoList";

export default function Home() {
  return (
    <Stack>
      <ToDoAddForm />
      {/* @ts-expect-error Async Server Component */}
      <ToDoList />
    </Stack>
  );
}
