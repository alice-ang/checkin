"use client";
import { checkInData } from "@/lib/mock";
import { getRandomNumber } from "@/lib/utils";
import { Rocket } from "lucide-react";
import { FC, useState } from "react";
import { Timer } from "./Timer";
import { Button } from "./ui";

export const CheckIn: FC = () => {
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);

  return (
    <section className="section-constraints flex flex-col justify-between space-y-4">
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Rocket />
            <h3>{inProgress ? "Today's Question" : checkInData.title}</h3>
          </div>
          <p className="text-muted-foreground">
            {inProgress ? "" : checkInData.subtitle}
          </p>
        </div>

        <section className="space-y-2">
          <p className="text-xl">
            {currentQuestion !== null
              ? checkInData.questions[currentQuestion].question
              : checkInData.description}
          </p>
          <p className="font-normal italic">
            Start by asking the person to your right.
          </p>
        </section>
      </div>

      {inProgress ? (
        <Timer />
      ) : (
        <Button
          className="w-full"
          onClick={() => {
            setInProgress(true);

            setCurrentQuestion(
              getRandomNumber(0, checkInData.questions.length - 1),
            );
          }}
        >
          Get Started
        </Button>
      )}
    </section>
  );
};
