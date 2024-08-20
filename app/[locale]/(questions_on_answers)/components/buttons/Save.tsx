import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";

const Save = () => {
  const t = useTranslations("QuestionsOnAnswers");
  return (
    <Button
      className="flex self-end"
      variant="solid"
      color="primary"
      radius="sm"
      size="lg"
      type="submit"
    >
      {t("save")}
    </Button>
  );
};

export default Save;
