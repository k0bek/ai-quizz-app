import React, { ReactNode } from "react";
import User from "./create-quizz-page/components/User";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <User />
      {children}
    </main>
  );
};

export default layout;
