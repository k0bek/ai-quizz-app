"use client";

import React, { useState } from "react";
import PromptForm from "./create-quiz/components/forms/PromptForm";
import ButtonGroupComponent from "./create-quiz-configure-quiz/components/ButtonsGroupComponent";

const QuizCreator: React.FC = () => {
  const [quizContent, setQuizContent] = useState<string | null>(null);

 

  return (
    <div>
      {!quizContent ? (
        <PromptForm />
      ) : (
        <ButtonGroupComponent initialContent={quizContent} />
      )}
    </div>
  );
};

export default QuizCreator;
