import { Button, Timer } from "@/components";
import { Rocket, Play } from "lucide-react";

export default function CheckIn() {
  return (
    <section className="p-4">
      <Rocket />
      <h3>Checkin</h3>

      <Timer />
    </section>
  );
}
