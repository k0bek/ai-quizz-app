import React from "react";
import PromptSection from "./components/PromptSection";
import Prompt from "./components/StatusIndicator/Prompt";
import User from "./components/User";
type Props = {};

function page({}: Props) {
  return (
    <main className="p-4 flex flex-col gap-6 ">
      <User />
      <Prompt />
    </main>
  );
}

export default page;
