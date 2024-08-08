import React from "react";
import StatusIndicator from "../create-quizz/components/StatusIndicator/StatusIndicator";
import Preview from "./components/Preview";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="p-4 flex flex-col">
      <StatusIndicator />
      <h1 className="text-4xl font-semibold pt-5 pb-5">Preview</h1>
      <Preview />
    </main>
  );
};

export default page;
