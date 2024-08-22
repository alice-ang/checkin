"use client";
import { Play, RotateCcw, Pause } from "lucide-react";
import { FC, useCallback, useEffect, useState } from "react";
import { Button, Progress } from "./ui";

type TimerProps = {
  seconds?: number;
};

export const Timer: FC<TimerProps> = ({ seconds = 60 }) => {
  const [countdown, setCountdown] = useState(seconds);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = useCallback(() => {
    if (!isRunning) {
      setCountdown(seconds);
    }
    setIsRunning((prevState) => !prevState);
  }, [isRunning, seconds]);

  const resetTimer = useCallback(() => {
    setCountdown(seconds);
    setIsRunning(false);
  }, [seconds]);

  useEffect(() => {
    let intervalId: undefined | NodeJS.Timeout;

    if (isRunning && countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, countdown, setCountdown]);

  const formatTime = useCallback(() => {
    return countdown.toString().padStart(2, "0");
  }, [countdown]);

  return (
    <div className="mx-auto w-full space-y-4">
      <h1 className="text-center font-bold">{formatTime()}s</h1>
      <Progress value={(countdown / seconds) * 100} />
      <div className="flex flex-row gap-4">
        {countdown > 0 && countdown <= seconds && (
          <Button variant="secondary" className="shrink-0" onClick={resetTimer}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        )}
        {isRunning ? (
          <Button variant="default" className="w-full" onClick={toggleTimer}>
            <Pause className="mr-2 h-4 w-4" />
            Pause
          </Button>
        ) : (
          <Button className="w-full" onClick={toggleTimer}>
            <Play className="mr-2 h-4 w-4" />
            Start
          </Button>
        )}
      </div>
    </div>
  );
};
