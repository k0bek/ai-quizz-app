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
  incrementStep: () => void;
  decrementStep: () => void;
};

const StepContext = createContext<StepContextProps | undefined>(undefined);

function StepContextProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0);
  const incrementStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const decrementStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };
  return (
    <StepContext.Provider
      value={{ currentStep, setCurrentStep, incrementStep, decrementStep }}
    >
      {children}
    </StepContext.Provider>
  );
}
export const useStep = () => {
  const context = React.useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepContextProvider");
  }
  return context;
};
export default StepContextProvider;
