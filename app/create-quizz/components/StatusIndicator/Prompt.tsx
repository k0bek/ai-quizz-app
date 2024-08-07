import React from "react";
import PromptSection from "../PromptSection";
import StatusIndicator from "./StatusIndicator";

type Props = {};

function Prompt({}: Props) {
  return (
    <div className="flex flex-col gap-6 md:w-[55rem] mx-auto">
      <StatusIndicator />
      <h1 className="text-4xl font-semibold">Text prompt</h1>
      <p>Here you can create quizz based on your prompt</p>
      <PromptSection />
    </div>
  );
}

export default Prompt;
