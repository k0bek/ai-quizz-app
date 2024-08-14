import { Progress } from "@nextui-org/react";
import React from "react";

const SingleQuizQuestion = () => {
  return (
    <div className="bg-default-100 p-6 py-10 rounded-xl flex flex-col items-start gap-8">
      <Progress
        aria-label="Loading..."
        value={60}
        className="w-96"
        color="base-primary"
      />
      XD
    </div>
  );
};

export default SingleQuizQuestion;
