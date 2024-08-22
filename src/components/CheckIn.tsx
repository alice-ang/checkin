"use client";
import React, { FC, useState } from "react";
import { checkInData } from "@/lib/mock";
import { Rocket } from "lucide-react";
import { Timer } from "./Timer";
import { Button } from "./ui";
import { Constraints } from "./Constraints";
import { getRandomNumber } from "@/lib/utils";

export const CheckIn: FC = () => {
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);

  return (
    <Constraints>
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Rocket />
            <h3>{inProgress ? "Today's Question" : checkInData.title}</h3>
          </div>
          <p className="text-muted-foreground">
            {inProgress ? "" : checkInData.subtitle}
          </p>
        </div>

        <section className="">
          <p>
            {currentQuestion
              ? checkInData.questions[currentQuestion].question
              : checkInData.description}
          </p>
        </section>

        {inProgress ? (
          <div>
            <Timer seconds={4} />
          </div>
        ) : (
          <Button
            className="w-full"
            onClick={() => {
              setInProgress(true);
              setCurrentQuestion(
                getRandomNumber(0, checkInData.questions.length),
              );
            }}
          >
            Get Started
          </Button>
        )}
      </section>
    </Constraints>
  );
};
