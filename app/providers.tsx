"use client";

import { NextUIProvider } from "@nextui-org/react";
import ModalProvider from "./providers/modalProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
      <ModalProvider />
    </NextUIProvider>
  );
}
