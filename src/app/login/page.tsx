"use client";

import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
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

  if (!user) {
    return (
      <div>
        <Auth
          redirectTo={redirectTo}
          appearance={{
            theme: ThemeSupa,
            className: {
              container: "w-full max-w-sm md:max-w-md mx-auto",
            },
            style: {
              container: {
                marginRight: "auto",
                marginLeft: "auto",
              },
            },
          }}
          supabaseClient={supabaseClient}
          providers={[]}
          socialLayout="horizontal"
        />
      </div>
    );
  }

  return <div>logged in. wait for redirect...</div>;
}
