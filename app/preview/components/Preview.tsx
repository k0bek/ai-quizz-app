import React from "react";
import { Chip } from "@nextui-org/chip";
import QuizItem from "./Quiz/QuizItem";
import NextButton from "@/app/create-quizz/components/buttons/NextButton";
import { Switch } from "@nextui-org/switch";
function Preview() {
  const mockQuestions = [
    {
      number: 1,
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
      number: 2,
      question: "Who won the 2020 Nobel Prize in Literature?",
      answers: [
        "Jane Austen",
        "William Shakespeare",
        "Ernest Hemingway",
        "George Orwell",
      ],
    },
    {
      number: 3,
      question: "Which famous American inventor developed the light bulb?",
      answers: [
        "Alexander Graham Bell",
        "Enrico Fermi",
        "Nikola Tesla",
        "Charles Babbage",
      ],
    },
    {
      number: 4,
      question: "Who is the current Prime Minister of Canada?",
      answers: ["Joe Biden", "Stephen McCain", "John Cena", "Michael Douglas"],
    },
  ];
  return (
    <>
      <article className="bg-content2 p-4 flex-col flex gap-4 rounded-lg">
        <div className="flex justify-between items-center ">
          <Chip>Total 5 questions</Chip>
          <div className="flex items-center gap-2">
            <label htmlFor="answers">Answers</label>
            <Switch />
          </div>
        </div>
        {mockQuestions.map((question, index) => (
          <QuizItem key={index} {...question} />
        ))}
      </article>
      <NextButton />
    </>
  );
}

export default Preview;
