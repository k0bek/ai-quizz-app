

"use client";
import React, { useState } from 'react';
import { Switch } from '@nextui-org/react';
import Image from "next/image";

const QuizDetail = () => {
  const [enabled, setEnabled] = useState(false);

  const quizData = [
    {
      question: '1. What is one of the key features of cryptocurrencies?',
      description: 'Quiz description',
      options: ['Physical existence', 'Test1', 'test2', 'test3'],
      selected: 'Test1',
    },
    {
      question: '2. What is another key feature of cryptocurrencies?',
      description: 'Quiz description',
      options: ['Physical existence', 'Test1', 'test2', 'test3'],
      selected: 'Test1',
    },
    {
      question: '3. What is a third key feature of cryptocurrencies?',
      description: 'Quiz description',
      options: ['Physical existence', 'Test1', 'test2', 'test3'],
      selected: 'Test1',
    },
    {
      question: '4. What is a fourth key feature of cryptocurrencies?',
      description: 'Quiz description',
      options: ['Physical existence', 'Test1', 'test2', 'test3'],
      selected: 'Test1',
    },
  ];

  return (
    <div className=" bg-white  w-full md:max-w-7xl">
      <div className="bg-white p-4 md:p-6 rounded-lg ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Quiz Detail</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Share QUIZ
          </button>
        </div>

        <div className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md">
          <h2 className="font-bold text-lg">
            Title: Understanding Cryptocurrencies and Their Impact on Finance
          </h2>
          <p className="text-gray-600">
            Explore how cryptocurrencies like Bitcoin and Ethereum are transforming the financial landscape
            through decentralization, blockchain technology, and the potential for high returns, while also 
            discussing risks and regulatory challenges.
          </p>
        </div>

        <nav className="flex space-x-6 mb-6 bg-gray-100 p-2 rounded-lg overflow-x-auto">
          <a href="#" className="text-gray-600 font-semibold px-2 py-2 rounded-lg bg-white whitespace-nowrap">Questions</a>
          <a href="#" className="text-gray-600 px-2 py-2 rounded-lg bg-gray-100 whitespace-nowrap">Settings</a>
          <a href="#" className="text-gray-600 px-2 py-2 rounded-lg bg-gray-100 whitespace-nowrap">Statistics</a>
          <a href="#" className="text-gray-600 px-2 py-2 rounded-lg bg-gray-100 whitespace-nowrap">General</a>
        </nav>

        <div className="mb-6">
          <p className="text-gray-700">Manage your quiz questions here. You can edit and delete questions. This page is a preview page for your question.</p>
        </div>

        <div className="bg-gray-200 py-4 px-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex justify-end items-center mb-4">
              <button className="bg-blue-600 text-white py-2 px-2 rounded-lg ml-auto">Total 5 question</button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500">Answers</span>
              <Switch 
                checked={enabled} 
                onChange={(e) => setEnabled(e.target.checked)}
                 className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                 enabled ? 'bg-blue-500' : 'bg-gray-300'
                }`} 
                >
  <span
    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
      enabled ? 'translate-x-5' : 'translate-x-1'
    }`}
  />
</Switch>
            </div>
          </div>

          <div className="flex justify-end items-center mb-4">
            <button className="bg-blue-300 text-blue-600 py-2 px-2 rounded-lg ml-auto">Add new question</button>
          </div>

          {quizData.map((data, index) => (
            <div key={index} className="bg-gray-100 p-4 mb-4 border-dashed border-2 rounded-lg flex justify-between items-start shadow-sm">
              <div className="w-full">
                <h3 className="font-bold mb-2">{data.question}</h3>
                <p className="text-gray-500 mb-4">{data.description}</p>
                <div className="space-y-2">
                  {data.options.map((option, i) => (
                    <div
                      key={i}
                      className={`flex items-center p-2 rounded-lg cursor-pointer ${data.selected === option ? 'bg-green-100' : 'bg-white'}`}
                    >
                      <span 
                        className="font-medium" 
                        style={{ 
                          textShadow: '1px 0 5px rgba(0, 0, 0, 0.5)' 
                        }}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="ml-3">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2 mt-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <Image
                    src="/assets/edit.svg"
                    width={20}
                    height={20}
                    alt="edit icon"
                  />
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <Image
                    src="/assets/bin.svg"
                    width={20}
                    height={20}
                    alt="bin icon"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDetail;
