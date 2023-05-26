"use client";

import { apiClient } from "@/lib/apiClient";
import { TextInput } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ToDoAddForm() {
  const [value, setValue] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setIsProcessing(true);
    try {
      await apiClient.todo.$post({ json: { task: value } });
      setValue("");
      router.refresh();
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <TextInput
      disabled={isProcessing}
      placeholder="Type ToDo title"
      value={value}
      onChange={(v) => setValue(v.target.value)}
      onKeyUp={(e) => {
        if (!e.nativeEvent.isComposing && e.key === "Enter") {
          handleSubmit();
        }
      }}
    ></TextInput>
  );
}
