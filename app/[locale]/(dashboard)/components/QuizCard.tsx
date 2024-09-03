


"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib";
import { useModalStore } from "@/store/modalStore";
import { useTranslations } from "next-intl";
import { updateQuizStatus } from '@/utils/api/updateQuizStatus';

interface QuizCardProps {
  title: string;
  description: string;
  status: 'Active' | 'Inactive';
  questions: number;
  quizId: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  status,
  questions,
  quizId,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [isUpdating, setIsUpdating] = useState(false);
  const { openModal, setModalData } = useModalStore();
  const t = useTranslations("Dashboard");

  const handleOpenDeleteModal = () => {
    openModal("deleteQuizz");
    setModalData({
      title,
      description,
      status: currentStatus,
      questions,
    });
  };

  const handleStatusChange = async () => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    setIsUpdating(true);
    try {
      await updateQuizStatus(quizId, newStatus);
      setCurrentStatus(newStatus);
    } catch (error) {
      console.error('Failed to update quiz status:', error);
      // Opcjonalnie, możesz tutaj wyświetlić komunikat o błędzie dla użytkownika
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="border-dashed border-2 border-gray-300 bg-[#f4f4f5] p-3 md:justify-between flex flex-col shadow-md hover:shadow-lg transition-shadow relative w-full sm:w-auto h-auto rounded-lg">
      <div className="flex flex-row justify-between items-start">
        <div>
          <h3 className="font-semibold text-base text-default-700">{title}</h3>
          <p className="text-base font-medium text-default-600 mt-1">
            {description}
          </p>
        </div>
        <button className="cursor-pointer" onClick={handleOpenDeleteModal}>
          <Image
            src="/assets/bin.svg"
            width={20}
            height={20}
            className="min-w-5 min-h-5 md:min-h-6 md:min-w-6"
            alt="bin icon"
          />
        </button>
      </div>
      <div className="flex items-center justify-start gap-4 mt-4">
        <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded-lg">
          <p className="text-white text-small">
            {t("total")} {questions} {t("questions")}
          </p>
        </div>
        <button
          onClick={handleStatusChange}
          disabled={isUpdating}
          className={cn(
            "px-2 py-1 rounded-lg text-small h-full flex items-center justify-center cursor-pointer",
            currentStatus === "Active" ? "bg-success text-black" : "bg-danger text-white",
            isUpdating && "opacity-50 cursor-not-allowed"
          )}
        >
          {isUpdating ? t("updating") : currentStatus}
        </button>
      </div>
    </div>
  );
};

export default QuizCard;