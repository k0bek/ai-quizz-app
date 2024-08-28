"use client";
import Image from "next/image";
import React, { useState } from "react";
import thrash from "/public/assets/trash.svg";
import edit from "/public/assets/edit-2.svg";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import DeleteQuestionModal from "@/app/[locale]/(questions_on_answers)/modals/DeleteQuestionModal";
import { useModalStore } from "@/store/modalStore2";
type QuizItemPropType = {
  question: string;
  description: string;
  number: number;
  answers: string[];
};
type SelectedAnswers = {};
const QuizItem = ({
  question,
  description,
  answers,
  number,
}: QuizItemPropType) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    null | number
  >(null);
  const { openModal, closeModal, setModalData } = useModalStore();
  const labels = ["A", "B", "C", "D"];
  return (
    <div className=" relative flex flex-col gap-4">
      <div className="flex flex-col gap-4 pt-4 border-[1.5px] border-dashed rounded-lg  pb-4 pl-6 pr-6 ">
        <div className="flex justify-between items-start">
          <h1 className="font-bold text-[16px] leading-6 ">
            {`${number}. `}
            {question}
          </h1>
          <div className="flex p-2">
            <Image src={thrash} alt="delete" />
            <Image src={edit} alt="edit" />
          </div>
        </div>
        <span>{}</span>
        <div className="flex flex-col  gap-2">
          {answers.map((answer, index) => (
            <Button
              key={index}
              variant="flat"
              color="default"
              className={`justify-start items-center flex `}
            >
              {`${labels[index]}`}
              <Divider orientation="vertical" className="w-[1px]" />
              {answer}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default QuizItem;
