import { BackButton, Button, CheckIn, Constraints } from "@/components";
import { Rocket } from "lucide-react";

export default function CheckInPage() {
  return (
    <section className="min-h-screen">
      <header className="bg-secondary">
        <Constraints>
          <nav className="flex flex-row items-center justify-between gap-2">
            <BackButton />
            <h4 className="line-clamp-2 items-center">
              <span className="inline-flex align-bottom">
                <Rocket className="mr-2" />
              </span>
              Check-in
            </h4>
            <Button variant="ghost" size="icon" />
          </nav>
        </Constraints>
      </header>
      <CheckIn />
    </section>
  );
}
