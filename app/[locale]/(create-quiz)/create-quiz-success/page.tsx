import Image from "next/image";
import React from "react";
import documentIcon from "../../../public/assets/WEB/vuesax/bold/vuesax/bold/document-copy.svg";
import BackToDashboard from "../create-quiz/components/buttons/BackToDashboard";
const page = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold">Success</h1>
      <p className="text-foreground-600">
        You successfully created your quizz. You can now share it with others
      </p>
      <div className="bg-content2 p-6 gap-6 flex flex-col">
        <div className=" flex items-center h-[52px] bg-white p-3  gap-3 justify-center">
          <span className="text-lg">link.com/unique-id123</span>
          <Image src={documentIcon} alt="Document Icon" />
        </div>
      </div>
      <div className="flex items-center justify-end">
        <BackToDashboard />
      </div>
    </>
  );
};

export default page;
