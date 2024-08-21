import React from "react";
import { getTranslations } from "next-intl/server";
import PromptForm from "../forms/PromptForm";
async function Prompt() {
  const t = await getTranslations("CreateQuiz");
  return (
    <div className="flex flex-col gap-6 md:w-[55rem] mx-auto">
      <h1 className="text-4xl font-semibold">{t("createQuizHeading")}</h1>
      <p className="text-foreground-700">{t("createQuizMessage")}</p>
      <article className=" rounded-lg">
        <PromptForm />
      </article>
    </div>
  );
}

export default Prompt;
