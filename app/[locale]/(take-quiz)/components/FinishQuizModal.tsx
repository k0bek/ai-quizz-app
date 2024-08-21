"use client";

import { useModalStore } from "@/store/modalStore";
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

interface FinishQuizModalProps {
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  nextQuestion: () => void;
}

function FinishQuizModal({
  setShowResult,
  nextQuestion,
}: FinishQuizModalProps) {
  const t = useTranslations("TakeQuiz");
  const { isOpen, type, closeModal, modalData } = useModalStore();
  const isModalOpen = isOpen && type === "finishQuiz";
  return (
    <Modal
      onOpenChange={closeModal}
      isOpen={isModalOpen}
      size="3xl"
      className="bg-content2 "
      closeButton={
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#292D32",
            color: "white",
            width: 24,
            height: 24,
            fontSize: 11,
            fontWeight: "bold",
            borderRadius: "100%",
            top: 10,
            right: 10,
          }}
        >
          X
        </button>
      }
    >
      <ModalContent className="bg-content2">
        <ModalHeader>
          <div className="flex flex-col justify-start">
            <p className="text-lg text-foreground-700 font-semibold">
              {t("finishQuiz")}
            </p>
            <p className="text-base text-foreground-500 font-medium mt-1">
              {t("areYouSure")}
            </p>
          </div>
        </ModalHeader>
        <ModalFooter>
          <Button variant="flat" color="primary" onPress={closeModal}>
            {t("cancel")}
          </Button>
          <Button
            color="primary"
            onPress={() => {
              nextQuestion();
              setShowResult(true);
              closeModal();
            }}
          >
            {t("finish")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FinishQuizModal;
