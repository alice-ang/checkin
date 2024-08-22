"use client";

import { FC } from "react";
import { Button } from "@/components";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton: FC = () => {
  const router = useRouter();

  return (
    <Button size="icon" onClick={() => router.back()}>
      <ChevronLeft />
    </Button>
  );
};
