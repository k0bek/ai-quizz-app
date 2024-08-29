import React from "react";
import Preview from "./components/Preview";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import AddQuestionModal from "../../modals/AddQuestionModal";
const PreviewPage = () => {
  const t = useTranslations("QuizPreview");

  return (
    <section className="p-3">
      <h1 className="text-4xl font-semibold pt-5 pb-5">
        {t("quizPreviewHeading")}
      </h1>
      <h1
        className="text-lg
      font-normal text-foreground-600"
      >
        {t("quizPreviewMessage")}
      </h1>
      <Preview />
      <AddQuestionModal />
    </section>
  );
};

export default PreviewPage;
