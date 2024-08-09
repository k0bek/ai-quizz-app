import { Button, Textarea } from "@nextui-org/react";
import React from "react";
import EndContent from "../../../public/assets/endContent.svg";
import NextButton from "./buttons/NextButton";
const PromptSection = () => {
  return (
    <>
      <article className="bg-content2 rounded-lg">
        <Textarea
          isRequired
          variant="faded"
          label="Prompt"
          labelPlacement="outside"
          placeholder="Enter your prompt"
          className="p-6 gap-2"
        />
      </article>
      <aside className="w-full flex items-center justify-center">
        <NextButton />
      </aside>
    </>
  );
};

export default PromptSection;
