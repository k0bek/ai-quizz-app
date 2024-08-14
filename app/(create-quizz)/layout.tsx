import Header from "@/components/shared/Header";
import React, { ReactNode } from "react";
import StepContextProvider from "../context/StepContext";
import StatusIndicator from "./create-quizz/components/StatusIndicator/StatusIndicator";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <StepContextProvider>
      <main>
        <Header />
        <section className="md:w-[55rem] mx-auto gap-6 flex flex-col">
          <StatusIndicator />
          {children}
        </section>
      </main>
    </StepContextProvider>
  );
};

export default layout;
