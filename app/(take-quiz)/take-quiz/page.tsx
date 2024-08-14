import Container from "@/components/shared/Container";
import React from "react";
import TakeQuizBox from "../components/TakeQuizBox";

const TakeQuiz = () => {
  return (
    <Container>
      <section className="flex items-center justify-center h-screen">
        <TakeQuizBox />
      </section>
    </Container>
  );
};

export default TakeQuiz;
