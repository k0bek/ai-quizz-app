"use client";
import { useModalStore } from "@/store/modalStore";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";
import FilePicker from "../../(generate-create-quiz)/(generate-quiz)/components/FilePicker";
function InsertFileModal() {
  const { isOpen, closeModal, type } = useModalStore();
  const t = useTranslations("CreateQuiz");
  const isModalOpen = isOpen && type === "uploadFile";

  return (
    <Modal
      isOpen={isModalOpen}
      onOpenChange={closeModal}
      size="5xl"
      className="bg-Content-content2-light dark:bg-Content-content2-dark"
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
      <ModalContent className="bg-Content-content2-light dark:bg-Content-content2-dark">
        <ModalHeader>
          <div className="flex flex-col justify-start">
            <p className="text-lg text-foreground-700 font-semibold">
              {t("uploadFile")}
            </p>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="w-full h-full">
            <FilePicker id={"file"} name={"filePicker"} onClose={closeModal} />
          </div>
          <aside className="flex md:justify-between justify-start flex-col md:flex-row  gap-2 ">
            <div className="">
              <p className="text-foreground-600">
                {t("uploadFileSupportedFormats")}
              </p>
            </div>
            <div className="">
              <p className="text-medim text-foreground-600">
                {t("uploadFileMaximumSize")}
              </p>
            </div>
          </aside>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default InsertFileModal;
