"use client";

import HomeHeader from "@/app/home/HomeHeader";
import { AppShell } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout(props: Props) {
  return (
    <AppShell
      padding="md"
      header={<HomeHeader />}
      styles={(theme) => ({
        main: {
          margin: "auto",
          maxWidth: 800,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
}
