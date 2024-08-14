import React from "react";
import TakeQuizBox from "../components/TakeQuizBox";
import Container from "@/components/shared/Container";

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
