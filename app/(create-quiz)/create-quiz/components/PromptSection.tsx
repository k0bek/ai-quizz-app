"use client";
import { createQuizRoutes } from "@/constants";
import { Textarea } from "@nextui-org/react";
import React, { useRef } from "react";
import NextButton from "./buttons/NextButton";
import PromptForm from "./forms/PromptForm";
const PromptSection = () => {
  return (
    <article className=" rounded-lg">
      <PromptForm />
    </article>
  );
};

export default PromptSection;
