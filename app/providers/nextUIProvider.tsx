import React, { ReactNode } from "react";

const NextUIProvider = ({ children }: { children: ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIProvider;
