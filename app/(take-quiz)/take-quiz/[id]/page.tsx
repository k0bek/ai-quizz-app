import React from "react";
import Container from "@/components/shared/Container";
import SingleQuizQuestion from "../../components/SingleQuizQuestion";

const TakeQuiz = () => {
  return (
    <Container>
      <section className="flex items-center justify-center h-screen">
        <SingleQuizQuestion />
      </section>
    </Container>
  );
};

export default TakeQuiz;
