"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";  

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}    
      animate={{ opacity: 1, x: 0 }}      
      transition={{ duration: 0.5 }}     
      whileHover={{ scale: 1.1 }}       
      whileTap={{ scale: 0.95 }}          
      className="absolute top-4 left-6 sm:top-2 sm:left-4 md:top-6 md:left-8 hidden md:block"  
    >
      <Button
        onClick={handleBack}
        variant="light"
        color="default"
        size="sm"
        radius="sm"
        className="p-2 rounded-full bg-black text-white shadow-md flex items-center justify-center sm:p-1 md:p-2"  
      >
        <FaArrowLeft size={20} className="sm:text-[16px] md:text-[20px]" />
      </Button>
    </motion.div>
  );
};

export default BackButton;
