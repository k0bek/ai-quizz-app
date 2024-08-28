/*"use server";

import axios, { AxiosError } from "axios";
import { generateQuizUrl } from "@/constants/api";

interface GenerateQuizParams {
  content: string;
  numberOfQuestions: number;
  typeOfQuestions: string;
}

export const generateQuiz = async (params: GenerateQuizParams) => {
  try {
    const response = await axios.post(generateQuizUrl, params, {
      headers: {
        "Content-Type": "application/json-patch+json", 
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail || "API request failed");
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

*/