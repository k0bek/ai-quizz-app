
"use client";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import TickCircle from "./TickCircle";
import EmptyCircle from "./EmptyCircle";
import NextButton from "../../create-quiz/components/buttons/NextButton";
import { useRouter } from "next/navigation";
import NavigationControls from "../../create-quiz/components/buttons/NavigationControls";
import { routes } from "@/routes";
import { useTranslations } from "next-intl";

interface ButtonGroupComponentProps {
  initialContent: string;
}

const ButtonGroupComponent: React.FC<ButtonGroupComponentProps> = ({ initialContent }) => {
  const [selectedType, setSelectedType] = useState("multiple-choice");
  const [selectedQuantity, setSelectedQuantity] = useState("medium");
  const router = useRouter();
  const t = useTranslations("ConfigureQuiz");

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  const handleQuantityClick = (qty: string) => {
    setSelectedQuantity(qty);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const quizConfigData = {
      content: initialContent, 
      numberOfQuestions: selectedQuantity === "low" ? 5 : selectedQuantity === "medium" ? 10 : 15,
      questionType: selectedType,
    };

    try {
      const response = await fetch("/api/quiz/generate-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json-patch+json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGNkM2JlYi1hZDQ5LTQzZWUtOGIzOS1lYmUzYjAxMzA4ZDgiLCJqdGkiOiJiYzQ2MDRmMi1kZmNlLTRkMjUtODlhOS0wYzUwODczNDAyMWYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmF6d2FfdGVzdG93YSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImVtYWlsM0BlbWFpbHNlcnZpY2UuY29tIiwiZXhwIjoxNzI0OTI1NDQ1LCJpc3MiOiJodHRwczovL21sYWIyMDI0LWJhY2tlbmQueWVsbG93b2NlYW4tMzEzMzA1MDcud2VzdGV1cm9wZS5henVyZWNvbnRhaW5lcmFwcHMuaW8vIiwiYXVkIjoiaHR0cHM6Ly9tbGFiMjAyNC1iYWNrZW5kLnllbGxvd29jZWFuLTMxMzMwNTA3Lndlc3RldXJvcGUuYXp1cmVjb250YWluZXJhcHBzLmlvLyJ9.ACAA2VYeA-CiOwhUwjeXViZc2bkUBnxCssWjr3_tXcY`, 
          "Accept": "application/json",
        },
        body: JSON.stringify(quizConfigData),
      });

      if (response.ok) {
        const generatedQuiz = await response.json();
        console.log("Wygenerowany quiz:", generatedQuiz);
        router.push(routes.createQuiz[2].route);
      } else {
        console.error("Błąd przy generowaniu quizu:", response.statusText);
      }
    } catch (error) {
      console.error("Wystąpił błąd przy komunikacji z serwerem:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:w-full rounded-lg flex flex-col">
      <div className="flex flex-col bg-content2 gap-4 p-6">
        <span>{t("questionsType")}</span>
        <div className="w-full flex">
          <ButtonGroup
            className="flex flex-col md:flex-row justify-start gap-2 md:gap-0 items-start w-full"
            variant="solid"
            color="primary"
            radius="md"
            size="md"
          >
            <Button
              variant={selectedType === "multiple-choice" ? "solid" : "flat"}
              className={`w-full md:w-auto justify-start ${selectedType === "multiple-choice" ? "text-white" : ""}`}
              size="lg"
              startContent={
                selectedType === "multiple-choice" ? <TickCircle /> : <EmptyCircle />
              }
              name="multiple-choice"
              aria-pressed={selectedType === "multiple-choice"}
              onClick={() => handleTypeClick("multiple-choice")}
            >
              <span>{t("multipleChoice")}</span>
            </Button>
            <Button
              variant={selectedType === "true-false" ? "solid" : "flat"}
              className="w-full justify-start md:w-auto"
              size="lg"
              startContent={
                selectedType === "true-false" ? <TickCircle /> : <EmptyCircle />
              }
              name="true-false"
              aria-pressed={selectedType === "true-false"}
              onClick={() => handleTypeClick("true-false")}
            >
              <span>{t("trueFalse")}</span>
            </Button>
            <Button
              variant={selectedType === "fill-in-the-blank" ? "solid" : "flat"}
              className="w-full justify-start md:w-auto"
              size="lg"
              startContent={
                selectedType === "fill-in-the-blank" ? <TickCircle /> : <EmptyCircle />
              }
              name="fill-in-the-blank"
              aria-pressed={selectedType === "fill-in-the-blank"}
              onClick={() => handleTypeClick("fill-in-the-blank")}
            >
              <span>{t("fillIn")}</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <div className="gap-4 p-6 flex flex-col bg-content2">
          <span>{t("howManyQuestions")}</span>
          <ButtonGroup
            className="flex-col w-full gap-2 md:gap-0 items-start flex md:flex-row justify-start"
            variant="solid"
            color="primary"
            radius="md"
            size="md"
          >
            <Button
              variant={selectedQuantity === "low" ? "solid" : "flat"}
              className="w-full justify-start md:w-auto"
              size="lg"
              startContent={
                selectedQuantity === "low" ? <TickCircle /> : <EmptyCircle />
              }
              name="low"
              aria-pressed={selectedQuantity === "low"}
              onClick={() => handleQuantityClick("low")}
            >
              <span>{t("low")}</span>
            </Button>
            <Button
              variant={selectedQuantity === "medium" ? "solid" : "flat"}
              className={`w-full md:w-auto justify-start ${selectedQuantity === "medium" ? "text-white" : ""}`}
              size="lg"
              startContent={
                selectedQuantity === "medium" ? <TickCircle /> : <EmptyCircle />
              }
              name="medium"
              aria-pressed={selectedQuantity === "medium"}
              onClick={() => handleQuantityClick("medium")}
            >
              <span>{t("med")}</span>
            </Button>
            <Button
              variant={selectedQuantity === "high" ? "solid" : "flat"}
              className="w-full justify-start md:w-auto"
              size="lg"
              startContent={
                selectedQuantity === "high" ? <TickCircle /> : <EmptyCircle />
              }
              name="high"
              aria-pressed={selectedQuantity === "high"}
              onClick={() => handleQuantityClick("high")}
            >
              <span>{t("high")}</span>
            </Button>
            <Button
              variant={selectedQuantity === "manual" ? "solid" : "flat"}
              className="w-full justify-start md:w-auto"
              size="lg"
              startContent={
                selectedQuantity === "manual" ? <TickCircle /> : <EmptyCircle />
              }
              name="manual"
              aria-pressed={selectedQuantity === "manual"}
              onClick={() => handleQuantityClick("manual")}
            >
              <span>{t("man")}</span>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <NavigationControls>
        <NextButton />
      </NavigationControls>
    </form>
  );
}

export default ButtonGroupComponent;
