"use client";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import TickCircle from "./TickCircle";
import EmptyCircle from "./EmptyCircle";
function CheckboxGroupComponent() {
  const [isSelected, setIsSelected] = useState([]);
  return (
    <aside className="bg-content2 md:w-full p-6 rounded-lg  flex flex-col gap-2 ">
      <span>What type of questions ?</span>
      <div className=" w-full  flex ">
        <ButtonGroup
          className="flex  flex-col md:flex-row justify-start  gap-2 md:gap-0 items-start w-full "
          variant="solid"
          color="primary"
          radius="md"
          size="md"
        >
          <Button
            variant="solid"
            className="text-white w-full md:w-auto justify-start "
            size="lg"
            startContent={<TickCircle />}
          >
            <span className="">Multiple Choice</span>
          </Button>
          <Button
            variant="flat"
            color="primary"
            size="lg"
            className="w-full justify-start md:w-auto "
            startContent={<EmptyCircle />}
          >
            <span className="">True/False</span>
          </Button>
          <Button
            variant="flat"
            color="primary"
            size="lg"
            className="w-full justify-start md:w-auto"
            startContent={<EmptyCircle />}
          >
            Fill in the blank
          </Button>
        </ButtonGroup>
      </div>
      <span>How many questions ?</span>
      <div>
        <ButtonGroup
          className="flex-col w-full gap-2 md:gap-0 items-start flex md:flex-row justify-start "
          variant="solid"
          radius="md"
          size="md"
        >
          <Button
            className="w-full justify-start md:w-auto"
            variant="flat"
            color="primary"
            size="lg"
            startContent={<EmptyCircle />}
          >
            Low
          </Button>
          <Button
            variant="solid"
            color="primary"
            size="lg"
            className="text-white justify-start w-full md:w-auto"
            startContent={<TickCircle />}
          >
            Medium
          </Button>
          <Button
            variant="flat"
            color="primary"
            size="lg"
            className="w-full justify-start md:w-auto "
            startContent={<EmptyCircle />}
          >
            High
          </Button>
          <Button
            variant="flat"
            color="primary"
            size="lg"
            className="w-full justify-start md:w-auto"
            startContent={<EmptyCircle />}
          >
            Manual
          </Button>
        </ButtonGroup>
      </div>
    </aside>
  );
}

export default CheckboxGroupComponent;
