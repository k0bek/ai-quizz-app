import React from 'react';
import QuizCard from '../components/QuizCard';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { routes } from '@/routes';


interface Quiz {
  id: string;
  title: string;
  description: string;
  status: 'Active' | 'Inactive';
  questions: number;
}

// Przykładowe dane quizów
const quizzes: Quiz[] = [
  {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    title: 'Identify your biggest roadblock to succeeding in cryptocurrency',
    description: 'Quiz description',
    status: 'Active',
    questions: 15,
  },
  {
    id: '7b2bf7b8-47b3-4eaf-8cf3-9b2c3b4af85b',
    title: 'Identify your biggest roadblock to succeeding in cryptocurrency',
    description: 'Quiz description',
    status: 'Inactive',
    questions: 10,
  },
  {
    id: 'e6a28d4b-62cc-4dfd-a9ff-5b55a32db2ff',
    title: 'Identify your biggest roadblock to succeeding in cryptocurrency',
    description: 'Quiz description',
    status: 'Active',
    questions: 5,
  },
];

const DashboardPage = async () => {
  const t = await getTranslations('Dashboard');

  return (
    <section className="py-8 w-full md:max-w-7xl">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-5 font-semibold">
        <h2 className="text-4xl font-bold mb-4 sm:mb-0 text-foreground-700">
          {t('quizzes')}
        </h2>
        <Link href={routes.takeQuiz}>
          <button className="text-small text-white font-normal py-2 px-4 rounded-xl transition-colors bg-base-primary">
            {t('createNewQuizButton')}
          </button>
        </Link>
      </div>
      <p className="text-foreground-600 mb-4 text-medium md:text-large">
        {t('manageQuizz')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            description={quiz.description}
            status={quiz.status}
            questions={quiz.questions}
            quizId={quiz.id}
          />
        ))}
        <div className="border-dashed border-2 border-gray-300 bg-base-primary text-white rounded-lg flex flex-col justify-center items-center p-4">
          <Link href={routes.createQuiz[0].route}>
            <button className="text-white hover:text-gray-200 transition-colors flex flex-col items-center">
              <span className="text-4xl mb-2">+</span>
              <span>{t('addQuizzButton')}</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
