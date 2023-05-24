"use client";

import { Flex, Header, Menu, Title } from "@mantine/core";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function MainHeader() {
  const supabase = useSupabaseClient();

  const user = useUser();

  const router = useRouter();

  return (
    <Header height={60} p="xs">
      <Flex justify="space-between">
        <Title order={3}>Sample TODO Apllication</Title>
        <Menu
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <div>{user?.email}</div>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              icon={<IconLogout />}
              onClick={async (event) => {
                event.preventDefault();
                await supabase.auth.signOut();
                router.push("/");
              }}
            >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Header>
  );
}
