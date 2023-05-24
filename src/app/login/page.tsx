"use client";

import { Group } from "@mantine/core";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  const router = useRouter();

  const [redirectTo, setRedirectTo] = useState<string>();

  useEffect(() => {
    if (user && redirectTo) {
      router.push(redirectTo);
    }
  }, [user, router, redirectTo]);

  useEffect(() => {
    setRedirectTo(`${window.location.origin}/home`);
  }, []);

  return (
    <Group position="center">
      {user ? (
        <div>You are already logged in. Wait for redirect...</div>
      ) : (
        <Auth
          redirectTo={redirectTo}
          supabaseClient={supabaseClient}
          providers={[]}
        />
      )}
    </Group>
  );
}
