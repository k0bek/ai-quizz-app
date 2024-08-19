import React from 'react';
import Image from 'next/image'; 
import closeIcon from "/public/assets/closeIcon.svg";
interface DeleteQuestionProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
  questionTitle: string;
  questionDescription: string;
}

const DeleteQuestion: React.FC<DeleteQuestionProps> = ({ 
  isOpen, 
  onClose, 
  onConfirmDelete, 
  questionTitle, 
  questionDescription 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
   
      <div className="bg-default-200 p-6 rounded-lg shadow-lg w-[800px] min-h-[180px] relative"> 
      
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 bg-transparent hover:bg-gray-200 rounded-full transition"
        >
          <Image src={closeIcon} alt="close icon" />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-black">Are you sure?</h2>
        <p className="text-gray mb-5">
          This action cannot be undone. Once you delete the question, there is no going back.
        </p>

  
        <div className="bg-white p-4 rounded-lg mb-5">
          <h3 className="font-bold mb-1 text-gray-800">{questionTitle}</h3>
          <p className="text-gray-600">{questionDescription}</p>
        </div>

        <div className="flex justify-end space-x-2">
        <button
            onClick={onClose}
            className="bg-primary-200 text-primary-600 py-2 px-4 rounded-md "
          >
            Cancel
          </button>

          <button
            onClick={onConfirmDelete}
            className="bg-pink-600 text-white py-2 px-4 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteQuestion;
