// components/Dashboard.tsx
// components/Dashboard.tsx
import React from 'react';

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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {quizzes.map((quiz, index) => (
          <div key={index} className='border rounded-lg p-4 shadow-md flex flex-col'>
            <div className='flex-1'>
              <h2 className='text-xl font-semibold'>{quiz.title}</h2>
              <p className='text-gray-500 mb-2'>{quiz.description}</p>
              <p className='text-gray-500 mb-2'>Total {quiz.questions} questions</p>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <span className={`inline-block px-2 py-1 rounded text-white ${quiz.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                {quiz.status}
              </span>
              <button className='ml-2 text-red-500 hover:text-red-700 transition-colors'>🗑️</button>
            </div>
          </div>
        ))}
        <div className='border-dashed border-2 border-gray-300 rounded-lg flex justify-center items-center p-4'>
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

