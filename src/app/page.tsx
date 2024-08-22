import { Button, HeaderBar } from "@/components";
import { Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <HeaderBar>
        <h4 className="line-clamp-2 items-center">
          <span className="inline-flex align-bottom">
            <Sparkles className="mr-2" />
          </span>
          Emmy AI
        </h4>
      </HeaderBar>
      <section className="section-constraints flex flex-col justify-between">
        <div>
          <h1 className="font-extrabold uppercase">Let&apos;s get started</h1>
          <h3 className="text-muted-foreground">What do you want to do?</h3>
        </div>
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/check-in">
              <Rocket className="mr-2" /> Begin Check-In
            </Link>
          </Button>
          <Button className="w-full">
            <Link href="#">
              <Rocket className="mr-2" />
            </Link>
            Another Feature
          </Button>
        </div>
      </section>
    </main>
  );
}
