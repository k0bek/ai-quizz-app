import React from "react";
import QuizCard from "../components/QuizCard";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { routes } from "@/routes";

const quizzes = [
  {
    title: "Identify your biggest roadblock to succeeding in cryptocurrency",
    description: "Quiz description",
    status: "Active",
    questions: 15,
  },
  {
    title: "Identify your biggest roadblock to succeeding in cryptocurrency",
    description: "Quiz description",
    status: "Disabled",
    questions: 10,
  },
  {
    title: "Identify your biggest roadblock to succeeding in cryptocurrency",
    description: "Quiz description",
    status: "Active",
    questions: 5,
  },
];

const DashboardPage = async () => {
  const t = await getTranslations("Dashboard");
  return (
    <section className="py-8 w-full md:max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-5 font-semibold">
        <h2 className="text-4xl font-bold mb-4 sm:mb-0 text-foreground-700">
          {t("quizzes")}
        </h2>
        <Link href={routes.takeQuiz}>
          <button className="text-small text-white font-normal py-2 px-4 rounded-xl transition-colors bg-base-primary">
            {t("createNewQuizButton")}
          </button>
        </Link>
      </div>
      <p className="text-foreground-600 mb-4 text-medium md:text-large">
        {t("manageQuizz")}
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
          <Link href={routes.createQuiz[0].route}>
            <button className="text-white hover:text-gray-200 transition-colors flex flex-col items-center">
              <span className="text-4xl mb-2">+</span>
              <span>{t("addQuizzButton")}</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
