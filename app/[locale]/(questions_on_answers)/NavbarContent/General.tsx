"use client";
import { Input } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import Save from "../components/buttons/Save";
import NavbarContentContainer from "@/components/NavbarContentContainer";
import { useTranslations } from "next-intl";

const General = () => {
  const [errors, setErrors] = useState("");
  const quizTitleRef = useRef<HTMLInputElement>(null);
  const quizDescRef = useRef<HTMLInputElement>(null);

  const verifyInputs = (e: React.FormEvent) => {
    e.preventDefault();

    const title = quizTitleRef.current?.value || "";
    const desc = quizDescRef.current?.value || "";

    if (!title.trim() || !desc.trim()) {
      setErrors("Please fill in all the fields.");
      return false;
    }

    // If inputs are valid, proceed with form submission logic here
    setErrors(""); // Clear any previous errors
    console.log("Form is valid. Proceeding with submission...");
    // Add  form submission logic here

    return true;
  };
  const t = useTranslations("QuestionsOnAnswers");
  return (
    <NavbarContentContainer>
      <form
        onSubmit={verifyInputs}
        className="gap-8 p-6 bg-content2 flex flex-col"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="QuizTitle">{t("generalSettingsHeading")}</label>
          <Input
            ref={quizTitleRef}
            color="default"
            variant="flat"
            type="text"
            size="sm"
            radius="sm"
            placeholder="Quiz Title"
          />
          <span className="text-sm text-foreground-500">
            {t("generalSettingsHeadingTitle")}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="QuizDescription">
            {t("quizDescriptionSettingsHeading")}
          </label>
          <Input
            ref={quizDescRef}
            color="default"
            variant="flat"
            type="text"
            size="sm"
            radius="sm"
            placeholder={t("quizDescriptionSettingsHeading")}
          />
          <span className="text-sm text-foreground-500">
            {t("quizDescriptionSettingsTitle")}
          </span>
        </div>
        {errors && <span className="text-red-500">{errors}</span>}
        <Save />
      </form>
    </NavbarContentContainer>
  );
};

export default General;
