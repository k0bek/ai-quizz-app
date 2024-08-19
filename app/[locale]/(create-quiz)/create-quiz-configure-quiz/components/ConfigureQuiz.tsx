import React from "react";
import ButtonGroupComponent from "./ButtonsGroupComponent";

function ConfigureQuiz() {
  return (
    <aside className="md:w-[55rem] mx-auto flex flex-col gap-6">
      <h1 className="text-4xl leading-10 font-semibold text-foreground-700">
        Configure quiz
      </h1>
      <span className="text-foreground-700">
        Here, you can create quizz based on your prompt
      </span>
      <ButtonGroupComponent />
    </aside>
  );
}

export default ConfigureQuiz;
