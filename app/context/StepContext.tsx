"use client";
import React, {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
} from "react";

type StepContextProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<SetStateAction<number>>;
};

const StepContext = createContext<StepContextProps | undefined>(undefined);

function StepContextProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const value = {
    currentStep,
    setCurrentStep,
  };
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export default StepContextProvider;
