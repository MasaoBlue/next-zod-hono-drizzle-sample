import { ApiType } from "@/app/api/[slug]/route";
import { hc } from "hono/client";

export const apiClient = hc<ApiType>("/api");
