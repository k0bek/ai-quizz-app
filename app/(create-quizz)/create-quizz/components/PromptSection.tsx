"use client";
import { createQuizRoutes } from "@/constants";
import { Textarea } from "@nextui-org/react";
import React, { useRef } from "react";
import NextButton from "./buttons/NextButton";
import PromptForm from "./forms/PromptForm";
const PromptSection = () => {
  // const ref = useRef(null);
  // const refHandler = () => {
  //   const value = ref?.current?.value;
  //   console.log(value);
  //   // Call your API here
  // };
  return (
    <article className=" rounded-lg">
      <PromptForm />
    </article>
  );
};

export default PromptSection;
