import Link from "next/link";
import React from "react";
import NextButton from "../create-quizz-page/components/buttons/NextButton";
import User from "../create-quizz-page/components/User";
import ConfigureQuiz from "./components/ConfigureQuiz";
function page() {
  return (
    <main className="p-4 flex-col flex pt-2 pb-2 pr-2 pl-2 gap-2 ">
      <ConfigureQuiz />
      <NextButton />
    </main>
  );
}

export default page;
