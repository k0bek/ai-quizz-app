import React from "react";

const QuizDurationTime = ({
  durationInSeconds,
}: {
  durationInSeconds: number;
}) => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const minuteStr =
      minutes > 0 ? `${minutes} minute${minutes > 1 ? "s" : ""}` : "";
    const secondStr =
      remainingSeconds > 0
        ? `${remainingSeconds} second${remainingSeconds > 1 ? "s" : ""}`
        : "";

    if (minutes > 0 && remainingSeconds > 0) {
      return `${minuteStr} ${secondStr}`;
    } else if (minutes > 0) {
      return minuteStr;
    } else {
      return secondStr;
    }
  };

  return <> {formatDuration(durationInSeconds)}</>;
};

export default QuizDurationTime;
