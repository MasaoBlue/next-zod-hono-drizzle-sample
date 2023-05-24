"use client";

import { CacheProvider } from "@emotion/react";
import {
  MantineProvider as OriginalMantineProvider,
  useEmotionCache,
} from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";

export default function MantineProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <OriginalMantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          // Override any other properties from default theme
          fontFamily: "Open Sans, sans serif",
          spacing: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.8rem",
            lg: "2.2rem",
            xl: "2.8rem",
          },
          colorScheme: "dark",
          globalStyles: (theme) => ({
            body: {
              ...theme.fn.fontStyles(),
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[7]
                  : theme.white,
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
              lineHeight: theme.lineHeight,
            },
          }),
        }}
      >
        {children}
      </OriginalMantineProvider>
    </CacheProvider>
  );
}
