import { createQuizRoutes } from "@/constants";
import { Button, Link } from "@nextui-org/react";
import React from "react";
import RightArrow from "./RightArrow";

const SaveQuiz = () => {
  return (
    <Button
      endContent={<RightArrow />}
      variant="solid"
      color="primary"
      size="lg"
      radius="sm"
      type="submit"
    >
      Save Quiz
    </Button>
  );
};

export default SaveQuiz;
