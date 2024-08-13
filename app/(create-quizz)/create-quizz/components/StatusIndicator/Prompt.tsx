import React from "react";
import PromptSection from "../PromptSection";
import StatusIndicator from "./StatusIndicator";

function Prompt() {
  return (
    <div className="flex flex-col gap-6 md:w-[55rem] mx-auto">
      <h1 className="text-4xl font-semibold">Text prompt</h1>
      <p className="text-foreground-700">
        Here you can create quizz based on your prompt
      </p>
      <PromptSection />
    </div>
  );
}

export default Prompt;
