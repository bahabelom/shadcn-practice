"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button variant="destructive" size={"lg"} className="bg-blue-500 text-white hover:bg-blue-600">Click me</Button>
    </div>
  );
}
