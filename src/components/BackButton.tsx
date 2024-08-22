"use client";

import { FC } from "react";
import { Button } from "@/components";
import { ChevronLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export const BackButton: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const hasHistory = pathname != "/";

  return (
    <Button
      size="icon"
      variant={hasHistory ? "default" : "ghost"}
      onClick={() => (hasHistory ? router.back() : null)}
    >
      {hasHistory && <ChevronLeft />}
    </Button>
  );
};
