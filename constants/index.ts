"use client";

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
