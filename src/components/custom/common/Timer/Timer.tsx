/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/Button/button";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useStopwatch } from "react-timer-hook";

function MyStopwatch() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
    // restart,
  } = useStopwatch({
    autoStart: false,
  });

  const location = useLocation();

  let hasTaskStarted = localStorage.getItem("has-task-started");
  if (hasTaskStarted) {
    hasTaskStarted = JSON.parse(hasTaskStarted);
  }

  const handleEndTask = () => {
    localStorage.removeItem("has-task-started");
    reset();
  };

  useEffect(() => {
    addEventListener("beforeunload", () => {
      localStorage.setItem("timer-value", JSON.stringify(totalSeconds));
    });

    // const timerValue = localStorage.getItem("timer-value");
    // const hasTimerStarted = localStorage.getItem("has-task-started");
    // if (timerValue && hasTimerStarted) {
    //   reset(Date.now() + JSON.parse(timerValue), true);
    //   const time = new Date();
    //   time.setSeconds(time.getSeconds() + JSON.parse(timerValue));
    //   restart(time);
    // }
    // console.log(Date.now());
  }, [location]);
  return (
    <div className="flex justify-end flex-wrap items-center gap-[1rem] mt-[2rem]">
      {/* {hasTaskStarted && (
        <h1 className="text-2xl font-semibold text-primary">Timer</h1>
      )} */}
      {hasTaskStarted && (
        <div className="text-3xl font-semibold">
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      )}
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <div className="flex gap-[0.2rem] items-center justify-center ">
        {!hasTaskStarted ? (
          <Button
            onClick={() => {
              localStorage.setItem("has-task-started", JSON.stringify(true));
              start();
            }}
          >
            Start Task
          </Button>
        ) : (
          <div className="flex gap-3 items-center">
            {isRunning ? (
              <Button variant={"secondary"} onClick={pause}>
                Pause
              </Button>
            ) : (
              <Button variant={"secondary"} onClick={start}>
                Resume
              </Button>
            )}
            <Button variant={"default"} onClick={handleEndTask}>
              End Task
            </Button>
          </div>
        )}

        {/* <Button variant={"outline"} onClick={reset}>
          Reset
        </Button> */}
      </div>
    </div>
  );
}

export default function Timer() {
  return (
    <div>
      <MyStopwatch />
    </div>
  );
}
