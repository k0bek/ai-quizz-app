import create from 'zustand';

interface QuizState {
  content: string;
  numberOfQuestions: number;
  questionType: string;
  setContent: (content: string) => void;
  setNumberOfQuestions: (number: number) => void;
  setQuestionType: (type: string) => void;
  generateQuiz: () => Promise<void>; 
}

export const useQuizStore = create<QuizState>((set) => ({
  content: '',
  numberOfQuestions: 0,
  questionType: '',
  setContent: (content) => set({ content }),
  setNumberOfQuestions: (number) => set({ numberOfQuestions: number }),
  setQuestionType: (type) => set({ questionType: type }),
  generateQuiz: async () => {
    const state = useQuizStore.getState();
    const quizData = {
      content: state.content,
      numberOfQuestions: state.numberOfQuestions,
      questionType: state.questionType,
    };

    try {
      const response = await fetch("/api/quiz/generate-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json-patch+json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NGNkM2JlYi1hZDQ5LTQzZWUtOGIzOS1lYmUzYjAxMzA4ZDgiLCJqdGkiOiJlODE0MTE5MC04ZmVmLTQ0OGYtOWZiMy00MGQ1YTNmYzBhNTEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmF6d2FfdGVzdG93YSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImVtYWlsM0BlbWFpbHNlcnZpY2UuY29tIiwiZXhwIjoxNzI0ODk1Mjk0LCJpc3MiOiJodHRwczovL21sYWIyMDI0LWJhY2tlbmQueWVsbG93b2NlYW4tMzEzMzA1MDcud2VzdGV1cm9wZS5henVyZWNvbnRhaW5lcmFwcHMuaW8vIiwiYXVkIjoiaHR0cHM6Ly9tbGFiMjAyNC1iYWNrZW5kLnllbGxvd29jZWFuLTMxMzMwNTA3Lndlc3RldXJvcGUuYXp1cmVjb250YWluZXJhcHBzLmlvLyJ9.7naPfFGIrd4dM2ynRtqW9DpD7nQudNw1JovSC2X2Qwo`,
          "Accept": "application/json",
        },
        body: JSON.stringify(quizData),
      });

      if (response.ok) {
        const generatedQuiz = await response.json();
        console.log("Wygenerowany quiz:", generatedQuiz);
       
      } else {
        console.error("Błąd przy generowaniu quizu:", response.statusText);
      }
    } catch (error) {
      console.error("Wystąpił błąd przy komunikacji z serwerem:", error);
    }
  },
}));
