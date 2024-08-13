"use client";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import TickCircle from "./TickCircle";
import EmptyCircle from "./EmptyCircle";
import NextButton from "../../create-quizz/components/buttons/NextButton";
import { createQuizRoutes } from "@/constants";
import { useRouter } from "next/navigation";
import NavigationControls from "../../create-quizz/components/buttons/NavigationControls";

function ButtonGroupComponent() {
  // State to track the selected button in each group
  const [selectedType, setSelectedType] = useState("multiple-choice");
  const [selectedQuantity, setSelectedQuantity] = useState("medium");

  // Handle clicks for the type of questions
  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  // Handle clicks for the number of questions
  const handleQuantityClick = (qty: string) => {
    setSelectedQuantity(qty);
  };
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(createQuizRoutes[2].route);
    // API call here
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" md:w-full   rounded-lg flex flex-col "
    >
      <div className="flex flex-col bg-content2 gap-4 p-6">
        <span>What type of questions?</span>
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
              className={`w-full md:w-auto justify-start ${
                selectedType === "multiple-choice" ? "text-white" : ""
              }`}
              size="lg"
              startContent={
                selectedType === "multiple-choice" ? (
                  <TickCircle />
                ) : (
                  <EmptyCircle />
                )
              }
              name="multiple-choice"
              aria-pressed={selectedType === "multiple-choice"}
              onClick={() => handleTypeClick("multiple-choice")}
            >
              <span>Multiple Choice</span>
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
              <span>True/False</span>
            </Button>
            <Button
              variant={selectedType === "fill-in-the-blank" ? "solid" : "flat"}
              className="w-full justify-start md:w-auto"
              size="lg"
              startContent={
                selectedType === "fill-in-the-blank" ? (
                  <TickCircle />
                ) : (
                  <EmptyCircle />
                )
              }
              name="fill-in-the-blank"
              aria-pressed={selectedType === "fill-in-the-blank"}
              onClick={() => handleTypeClick("fill-in-the-blank")}
            >
              Fill in the blank
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div>
        <div className="gap-4 p-6 flex flex-col bg-content2">
          <span>How many questions?</span>
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
              Low
            </Button>
            <Button
              variant={selectedQuantity === "medium" ? "solid" : "flat"}
              className={`w-full md:w-auto justify-start ${
                selectedQuantity === "medium" ? "text-white" : ""
              }`}
              size="lg"
              startContent={
                selectedQuantity === "medium" ? <TickCircle /> : <EmptyCircle />
              }
              name="medium"
              aria-pressed={selectedQuantity === "medium"}
              onClick={() => handleQuantityClick("medium")}
            >
              Medium
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
              High
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
              Manual
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
