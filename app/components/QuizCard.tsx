import React from 'react';
import trashIcon from '../img/bin.svg';

interface QuizCardProps {
  title: string;
  description: string;
  status: string;
  questions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ title, description, status, questions }) => {
  const statusColor = status === 'Active' ? '#17c964' : '#f31260';
  const textColor = status === 'Active' ? '#000' : '#fff'; 
  return (
    <div className='border-dashed border-2 border-gray-300 bg-[#f4f4f5] p-4 flex flex-col shadow-md hover:shadow-lg transition-shadow relative w-full h-auto' style={{ minHeight: '200px' }}>
      <button className='absolute top-2 right-2 p-1 bg-[#f4f4f5] rounded-full hover:bg-gray-200 transition-colors'>
        <img src={(trashIcon as any).src} alt='Delete' className='w-6 h-6' />
      </button>
      <div className='flex-1'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-gray-500 mb-2'>{description}</p>
      </div>
      <div className='flex items-center justify-start mt-4 space-x-4'>
        <div className='flex items-center bg-white px-2 py-1 rounded'>
          <p className='text-gray-500'>Total {questions} questions</p>
        </div>
        <span
          className='inline-block px-3 py-1 rounded text-sm font-medium'
          style={{ backgroundColor: statusColor, color: textColor }}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default QuizCard;
