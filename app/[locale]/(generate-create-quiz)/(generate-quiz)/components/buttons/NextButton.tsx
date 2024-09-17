"use client";

import React from "react";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion"; 
import RightArrow from "./RightArrow";
import { useTranslations } from "next-intl";

interface NextButtonProps {
  isPending?: boolean;
}

const NextButton = ({ isPending }: NextButtonProps) => {
  const t = useTranslations("CreateQuiz");

  return (
   
    <motion.div
      whileHover={{
        y: -10, 
        transition: {
          type: "spring",
          stiffness: 500, 
          damping: 10, 
        },
      }}
      whileTap={{
        scale: 0.95, 
        y: 0, 
      }}
    >
      <Button
        type="submit"
        variant="solid"
        color="primary"
        size="lg"
        radius="sm"
        isDisabled={isPending}
        endContent={<RightArrow />}
      >
        {t("nextButton")}
      </Button>
    </motion.div>
  );
};

export default NextButton;
