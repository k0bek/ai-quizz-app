"use client";

import React, { useState } from "react";
import Container from "@/components/shared/Container";
import QuizResults from "../../components/QuizResults";
import HistoryResults from "../../components/HistoryResults";
import TakeQuizBox from "../../components/TakeQuizBox";
import Quiz from "../../components/Quiz";
import { AnswerMapItem, HistoryItem } from "@/types";

export const quizData = {
  title: "Frontend Development Quiz",
  description:
    "Test your knowledge of frontend technologies, including HTML, CSS, and JavaScript.",
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "What does HTML stand for?",
      description: "Understand the basic terminology used in web development.",
      answers: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinking Text Marking Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question:
        "Which CSS property is used to change the text color of an element?",
      description: "Know how to apply styles to text in your web pages.",
      answers: ["text-color", "font-color", "color", "background-color"],
      correctAnswer: "color",
    },
    {
      id: 3,
      question: "Which JavaScript framework is maintained by Facebook?",
      description: "Identify popular JavaScript frameworks and libraries.",
      answers: ["Angular", "Vue.js", "React", "Ember.js"],
      correctAnswer: "React",
    },
    {
      id: 4,
      question: "What is the purpose of the 'box-sizing' property in CSS?",
      description: "Understand how CSS properties affect element dimensions.",
      answers: [
        "To adjust the size of an element’s padding",
        "To include padding and border in the element’s total width and height",
        "To set the box model for an element",
        "To create a flexible grid layout",
      ],
      correctAnswer:
        "To include padding and border in the element’s total width and height",
    },
  ],
};

const TakeQuiz = () => {
  const [isTakeQuizBoxVisible, setIsTakeQuizBoxVisible] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [answersMap, setAnswersMap] = useState<AnswerMapItem>({});
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const { questions } = quizData;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const handleSelectAnswer = (answer: string, index: number) => {
    setAnswersMap((prev) => ({
      ...prev,
      [activeQuestion]: index,
    }));
  };

  const nextQuestion = () => {
    if (answersMap[activeQuestion] !== undefined) {
      const selectedAnswer = answers[answersMap[activeQuestion]!];
      const isCorrect =
        answersMap[activeQuestion] ===
        questions[activeQuestion].answers.indexOf(correctAnswer);

      setResult((prev) =>
        isCorrect
          ? {
              ...prev,
              correctAnswers: prev.correctAnswers + 1,
            }
          : {
              ...prev,
              wrongAnswers: prev.wrongAnswers + 1,
            }
      );

      setHistory((prev) => {
        const updatedHistory = [...prev];
        const existingIndex = updatedHistory.findIndex(
          (item) => item.question === question
        );

        const options = answers.map((answer) => ({
          answer,
          properValue: answer === correctAnswer,
        }));

        const newHistoryItem = {
          question,
          selectedAnswer,
          isCorrect,
          options,
        };

        if (existingIndex >= 0) {
          updatedHistory[existingIndex] = newHistoryItem;
        } else {
          updatedHistory.push(newHistoryItem);
        }

        return updatedHistory;
      });
    }

    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const previousQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <section className="flex items-center justify-center h-screen">
        {isTakeQuizBoxVisible && (
          <TakeQuizBox
            setIsTakeQuizBoxVisible={setIsTakeQuizBoxVisible}
            quizTitle={quizData.title}
            quizDescription={quizData.description}
            quizLength={questions.length}
          />
        )}
        {!isTakeQuizBoxVisible && !showResult && (
          <Quiz
            questionHeading={questions[activeQuestion].question}
            questionDescription={questions[activeQuestion].description}
            currentQuestionNumber={activeQuestion + 1}
            answers={answers}
            handleSelectAnswer={handleSelectAnswer}
            selectedAnswerIndex={answersMap[activeQuestion]}
            nextQuestion={nextQuestion}
            previousQuestion={previousQuestion}
            quizLength={questions.length}
            setShowResult={setShowResult}
          />
        )}
        {showResult && !isHistoryVisible && (
          <QuizResults
            correctAnswers={result.correctAnswers}
            quizLength={questions.length}
            setIsHistoryVisible={setIsHistoryVisible}
          />
        )}
        {isHistoryVisible && (
          <HistoryResults
            quizLength={questions.length}
            correctAnswers={result.correctAnswers}
            history={history}
          />
        )}
      </section>
    </Container>
  );
};

export default TakeQuiz;
