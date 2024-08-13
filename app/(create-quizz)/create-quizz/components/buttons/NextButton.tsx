"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import RightArrow from "./RightArrow";
import { useStep } from "@/app/context/StepContext";
import { useFormStatus } from "react-dom";
const NextButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="solid"
      color="primary"
      size="lg"
      radius="sm"
      endContent={<RightArrow />}
      isDisabled={pending}
    >
      Next
    </Button>
  );
};

export default NextButton;
