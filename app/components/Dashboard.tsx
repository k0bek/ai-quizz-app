import React from 'react';
import QuizCard from './QuizCard';

const quizzes = [
  { title: "Identify your biggest roadblock to succeeding in cryptocurrency", description: "Quiz description", status: "Active", questions: 5 },
  { title: "Identify your biggest roadblock to succeeding in cryptocurrency", description: "Quiz description", status: "Disabled", questions: 5 },
  { title: "Identify your biggest roadblock to succeeding in cryptocurrency", description: "Quiz description", status: "Active", questions: 5 },
];

const Dashboard = () => {
  return (
    <div className='flex flex-col w-full p-5'>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-3xl font-bold'>Quizzes</h1>
        <button className='bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition-colors'>
          Create new Quiz
        </button>
      </div>
      <p className='text-gray-600 mb-5'>Here, you can effortlessly list, delete, edit, and create new exams.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6'>
        {quizzes.map((quiz, index) => (
          <QuizCard
            key={index}
            title={quiz.title}
            description={quiz.description}
            status={quiz.status}
            questions={quiz.questions}
          />
        ))}
        <div className='border-dashed border-2 border-gray-300 rounded-lg flex flex-col justify-between items-center p-4' style={{ minHeight: '200px' }}>
          <button className='text-gray-400 hover:text-gray-600 transition-colors flex flex-col items-center'>
            <span className='text-4xl mb-2'>+</span>
            <span>Add new quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
