# README

## Start Supabase locally

```sh
pnpm supabase start
```

- プロジェクトルートに `.env.local` を作成して以下を記載

```env
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY="上記のコマンドで表示される[anon key]の値"
DATABASE_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

## Start Next.js Application

```sh
pnpm dev
```

- Application: http://localhost:3000
- Supabase Dashboard: http://localhost:54323/

## Libraries

- Application Framework: Next.js
- UI: Mantine
- Router: Hono
- Validator: Zod
- ORM: Drizzle ORM
