"use client";
import React from "react";
import QuizCard from "../components/QuizCard";

const quizzes = [
  {
    title: "Identify your biggest roadblock to succeeding in cryptocurrency",
    description: "Quiz description",
    status: "Active",
    questions: 5,
  },
  {
    title: "Identify your biggest roadblock to succeeding in cryptocurrency",
    description: "Quiz description",
    status: "Disabled",
    questions: 5,
  },
  {
    title: "Identify your biggest roadblock to succeeding in cryptocurrency",
    description: "Quiz description",
    status: "Active",
    questions: 5,
  },
];

const DashboardPage = () => {
  return (
    <section className="py-8 w-full md:max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-5 font-semibold">
        <h2 className="text-4xl font-bold mb-4 sm:mb-0 text-foreground-700">
          Quizzes
        </h2>
        <button className="text-small text-white font-normal py-2 px-4 rounded-xl transition-colors bg-base-primary">
          Create new Quiz
        </button>
      </div>
      <p className="text-foreground-600 mb-4 text-medium md:text-large">
        Here, you can effortlessly list, delete, edit, and create new exams.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {quizzes.map((quiz, index) => (
          <QuizCard
            key={index}
            title={quiz.title}
            description={quiz.description}
            status={quiz.status}
            questions={quiz.questions}
          />
        ))}
        <div className="border-dashed border-2 border-gray-300 bg-base-primary text-white rounded-lg flex flex-col justify-center items-center p-4">
          <button className="text-white hover:text-gray-200 transition-colors flex flex-col items-center">
            <span className="text-4xl mb-2">+</span>
            <span>Add new quiz</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
