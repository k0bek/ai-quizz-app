"use client";
import React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import RightArrow from "./RightArrow";
const NextButton = () => {
  return (
    <Button
      endContent={<RightArrow />}
      className="flex items-center mx-auto mt-3 justify-center bg-primary-500 text-white"
    >
      Next
    </Button>
  );
};

export default NextButton;
