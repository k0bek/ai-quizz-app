import React from "react";
import StatusIndicator from "../create-quizz/components/StatusIndicator/StatusIndicator";
import User from "../create-quizz/components/User";
import Preview from "./components/Preview";

const page = () => {
  return (
    <main className="p-4 flex-col flex pt-2 pb-2 pr-2 pl-2 gap-2 ">
      <Preview />
    </main>
  );
};

export default page;
