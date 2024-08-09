import React from "react";
import StatusIndicator from "../create-quizz-page/components/StatusIndicator/StatusIndicator";
import User from "../create-quizz-page/components/User";
import Preview from "./components/Preview";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="p-4 flex-col flex pt-2 pb-2 pr-2 pl-2 gap-2 ">
      <StatusIndicator />
      <Preview />
    </main>
  );
};

export default page;
