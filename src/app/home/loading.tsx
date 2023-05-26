"use client";

import { Group, Loader } from "@mantine/core";

export default function HomeLoading() {
  return (
    <Group style={{ padding: 24 }} position="center">
      <Loader size="xl" variant="dots" />
    </Group>
  );
}
