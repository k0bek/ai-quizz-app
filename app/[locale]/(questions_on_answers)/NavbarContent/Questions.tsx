"use client";
import React, { useState } from "react";
import Switch from "../components/Switch";
import Image from "next/image";
import editIcon from "/public/assets/edit.svg";
import binIcon from "/public/assets/bin.svg";
import { useTranslations } from "next-intl";
import { useModalStore } from "@/store/modalStore2";
import EditQuestionModal from "../modals/EditQuestionModal";
import DeleteQuestionModal from "../modals/DeleteQuestionModal";

type quizDataType = {
  question: string;
  description: string;
  options: string[];
  selected: string;
};
type QuizData = {
  quizData: quizDataType[];
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  setQuizData: React.Dispatch<React.SetStateAction<quizDataType[]>>;
};
const Questions = ({
  setQuizData,
  quizData,
  enabled,
  setEnabled,
}: QuizData) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    number | null
  >(null);
  const { openModal, setModalData } = useModalStore();
  const t = useTranslations("QuestionsOnAnswers");
  const handleEdit = (index: number) => {
    setCurrentQuestionIndex(index);
    openModal("editQuestion");
  };

  const handleDelete = (index: number) => {
    setCurrentQuestionIndex(index);
    setModalData({
      title: quizData[index].question,
      description: quizData[index].description,
      status: "Error",
      questions: 2,
      onConfirmDelete: () => handleConfirmDelete(index),
    });
    openModal("deleteQuestion");
  };

  const handleConfirmDelete = (index: number) => {
    const updatedQuizData = quizData.filter((_, i) => i !== index);
    setQuizData(updatedQuizData);
  };

  const handleSaveEdit = (updatedQuestion: any) => {
    if (currentQuestionIndex !== null) {
      const updatedQuizData = [...quizData];
      updatedQuizData[currentQuestionIndex] = updatedQuestion;
      setQuizData(updatedQuizData);
    }
  };
  return (
    <section data-navbar-item="questions">
      <div className="bg-gray-200 py-4 px-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex justify-end items-center mb-4">
            <button className="bg-blue-600 text-white py-2 px-2 rounded-lg ml-auto">
              {t("total")} {quizData.length} {t("questionsSmall")}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-500">{t("answers")}</span>
            <Switch enabled={enabled} setEnabled={setEnabled} />
          </div>
        </div>

        <div className="flex justify-end items-center mb-4">
          <button className="bg-blue-300 text-blue-600 py-2 px-2 rounded-lg ml-auto">
            {t("addNewButton")}
          </button>
        </div>

        {quizData.map((data, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 mb-4 border-dashed border-2 rounded-lg flex justify-between items-start shadow-sm"
          >
            <div className="w-full">
              <h3 className="font-bold mb-2">{data.question}</h3>
              <p className="text-gray-500 mb-4">{data.description}</p>

              <div className="space-y-2">
                {data.options.map((option, i) => (
                  <div
                    key={i}
                    className={`flex items-center p-2 rounded-lg cursor-pointer ${
                      enabled && data.selected === option
                        ? "bg-green-100"
                        : "bg-white"
                    }`}
                  >
                    <span className="font-medium text-gray-700">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <div className="border-l border-gray-300 h-6 mx-2"></div>
                    <span className="text-gray-700">{option}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => handleEdit(index)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Image src={editIcon} alt="edit icon" />
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Image src={binIcon} alt="bin icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {currentQuestionIndex !== null && (
        <>
          <EditQuestionModal
            questionData={quizData[currentQuestionIndex]}
            onSave={handleSaveEdit}
          />
          <DeleteQuestionModal
            onConfirmDelete={() => handleConfirmDelete(currentQuestionIndex)}
            questionTitle={quizData[currentQuestionIndex].question}
            questionDescription={quizData[currentQuestionIndex].description}
          />
        </>
      )}
    </section>
  );
};

export default Questions;
