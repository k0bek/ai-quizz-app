import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import DetailsButton from "../components/buttons/DetailsButton";
import StatusChip from "../components/StatusChip/StatusChip";

const Statistics = () => {
  const finishedQuizzes = [
    {
      quizId: 1,
      score: 40,
      name: "Random",
      email: "user@example.com",
      stat: "Finished",
      time: new Date().getTime(),
      date: new Date().getDate(),
    },
    {
      quizId: 2,
      score: 40,
      name: "Random",
      email: "user@example.com",
      stat: "Stopped",
      time: new Date().getTime(),
      date: new Date().getDate(),
    },
    {
      quizId: 3,
      score: 40,
      name: "Random",
      email: "user@example.com",
      stat: "Stopped",
      time: new Date().getTime(),
      date: new Date().getDate(),
    },
    {
      quizId: 4,
      score: 40,
      name: "Random",
      email: "user@example.com",
      stat: "Finished",
      time: new Date().getTime(),
      date: new Date().getDate(),
    },
    {
      quizId: 5,
      score: 40,
      name: "Random",
      email: "user@example.com",
      stat: "Finished",
      time: new Date().getTime(),
      date: new Date().getDate(),
    },
  ];
  return (
    <section>
      <Table className="overflow-x-auto">
        <TableHeader>
          <TableColumn>SCORE</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>E-MAIL</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>TIME</TableColumn>
          <TableColumn>DATE</TableColumn>
          <TableColumn>DETAILS</TableColumn>
        </TableHeader>
        <TableBody>
          {finishedQuizzes.map((finishedQuizz) => (
            <TableRow key={finishedQuizz.quizId}>
              <TableCell>{finishedQuizz.score}</TableCell>
              <TableCell>{finishedQuizz.name}</TableCell>
              <TableCell>{finishedQuizz.email}</TableCell>
              <TableCell>
                {finishedQuizz.stat === "Stopped" && (
                  <StatusChip status="stopped"></StatusChip>
                )}
                {finishedQuizz.stat === "Finished" && (
                  <StatusChip status="finished"></StatusChip>
                )}
                {finishedQuizz.stat === "In Progress" && (
                  <StatusChip status="in-progress"></StatusChip>
                )}
              </TableCell>
              <TableCell>{finishedQuizz.time}</TableCell>
              <TableCell>{finishedQuizz.date}</TableCell>
              <TableCell>
                <DetailsButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Statistics;
