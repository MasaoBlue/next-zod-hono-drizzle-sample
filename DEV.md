# Memo

## Commands

### init project

```sh
pnpm dlx create-next-app
```

### init supabase

[Supabase CLI reference](https://supabase.com/docs/reference/cli/introduction)

```sh
pnpm run supabase init
```

### create migration

```sh
pnpm supabase migration new create_todo
# generated ./supabase/migrations/YYYYMMDDhhmmss_create_todo.sql
```

### reset db migration

```sh
pnpm supabase migration reset
```

## References

- [React の Suspense 対応非同期処理を手書きするハンズオン](https://zenn.dev/uhyo/books/react-concurrent-handson)
- [Next.js 13 app directory で記事投稿サイトを作ってみよう](https://zenn.dev/azukiazusa/articles/next-js-app-dir-tutorial)
  - UI コンポーネントを一括 export して使う方法
