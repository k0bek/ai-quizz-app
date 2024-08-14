import { Button, Input } from "@nextui-org/react";
import React from "react";

const General = () => {
  return (
    <form className="gap-8 p-6  bg-content2 flex flex-col" action="">
      <div className="flex flex-col gap-4">
        <label htmlFor="QuizTitle">Quiz Title</label>
        <Input
          color="default"
          variant="flat"
          type="text"
          size="sm"
          radius="sm"
          placeholder="Quiz Title"
        ></Input>
        <span className="text-sm text-foreground-500">
          This is your public quiz description. It will be displayed on your
          quiz page. You can change it anytime
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="QuizDescription">Quiz Description</label>
        <Input type="text" placeholder="Quiz Description"></Input>
        <span className="text-sm text-foreground-500">
          This is your public quiz description. It will be displayed on your
          quiz page. You can change it anytime
        </span>
      </div>

      <Button
        className="flex self-end"
        variant="solid"
        color="primary"
        radius="sm"
        size="lg"
      >
        Save
      </Button>
    </form>
  );
};

export default General;
