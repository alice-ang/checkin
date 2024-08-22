import { CheckIn, HeaderBar } from "@/components";
import { Rocket } from "lucide-react";

export default function CheckInPage() {
  return (
    <section className="h-screen min-h-screen">
      <HeaderBar>
        <h4 className="line-clamp-2 items-center">
          <span className="inline-flex align-bottom">
            <Rocket className="mr-2" />
          </span>
          Check-in
        </h4>
      </HeaderBar>
      <CheckIn />
    </section>
  );
}
