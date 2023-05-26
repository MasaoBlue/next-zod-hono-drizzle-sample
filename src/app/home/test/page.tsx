"use client";

import SuspenceComponent from "@/app/home/test/SuspenceComponent";
import { Suspense } from "react";

export default function TestPage() {
  return (
    <Suspense fallback={<>fallback</>}>
      <SuspenceComponent />;
    </Suspense>
  );
}
