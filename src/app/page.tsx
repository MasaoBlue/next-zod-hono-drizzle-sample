import { Stack, Title } from "@/_common/mantine/core";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Stack align="center">
        <Title>Sample ToDo Application</Title>
        <Link href="/login">login</Link>
      </Stack>
    </main>
  );
}
