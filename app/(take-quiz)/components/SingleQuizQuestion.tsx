"use client";

import { cn } from "@/lib";
import { Button, Divider, Progress } from "@nextui-org/react";
import React, { useState } from "react";

const SingleQuizQuestion = () => {
  const questions = ["Test1", "Test2", "Test3", "Test4"];
  const alphabet = ["A", "B", "C", "D"];
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index);
  };
  return (
    <div className="bg-default-100 px-6 py-6 pt-8 rounded-xl flex flex-col gap-8 items-center w-[700px]">
      <Progress
        aria-label="Loading..."
        value={80}
        color="primary"
        className="w-full"
      />
      <div className="w-full">
        <p className="font-bold text-foreground-700">
          1. What is one of the key features of cryptocurrencies?
        </p>
        <p className="text-foreground-500 text-base mt-1">
          Question description
        </p>
      </div>
      <ul className="w-full flex flex-col gap-4">
        {questions.map((question, index) => (
          <li
            key={question}
            className={cn(
              "flex flex-row justify-start gap-3 items-center w-full bg-white p-2 rounded-lg cursor-pointer hover:bg-primary transition-all group",
              selectedAnswer === index && "bg-primary"
            )}
            onClick={() => handleSelectAnswer(index)}
          >
            <span
              className={cn(
                "text-foreground-700 text-base w-6 h-6 border-r-1 border-foreground-300 group-hover:text-white",
                selectedAnswer === index && "text-white border-white"
              )}
            >
              {alphabet[index]}
            </span>
            <p
              className={cn(
                "text-foreground-700 text-base group-hover:text-white",
                selectedAnswer === index && "text-white"
              )}
            >
              {question}
            </p>
          </li>
        ))}
      </ul>
      <Button
        variant="solid"
        color="primary"
        radius="md"
        disabled={selectedAnswer === null}
        className="text-white self-end text-medium py-1 px-2 cursor-pointer disabled:bg-primary/60 disabled:cursor-not-allowed disabled:hover:bg-primary/60"
      >
        Next
      </Button>
    </div>
  );
};

export default SingleQuizQuestion;
