import { router as todoRouter } from "@/app/api/todo/route.hono";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

const router = app.route("/", todoRouter);

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;

export type ApiType = typeof router;
