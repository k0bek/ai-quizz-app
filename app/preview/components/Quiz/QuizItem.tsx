import Image from "next/image";
import React from "react";
import thrash from "/public/assets/trash.svg";
import edit from "/public/assets/edit-2.svg";
import { Button } from "@nextui-org/button";
type QuizItemPropType = {
  question: string;
  number: number;
  answers: string[];
};
const QuizItem = ({ question, answers, number }: QuizItemPropType) => {
  const labels = ["A", "B", "C", "D"];
  return (
    <div className=" relative flex flex-col p-4 gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex md:justify-between">
          <h1 className="font-semibold text-2xl">
            {`${number}.`}
            {question}
          </h1>
          <div className="flex   p-2">
            <Image src={thrash} alt="delete" />
            <Image src={edit} alt="edit" />
          </div>
        </div>
        <span>Quiz Description</span>
        <div className="flex flex-col gap-2">
          {answers.map((answer, index) => (
            <Button>{`${labels[index]} ${answer}`}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
