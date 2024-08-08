"use client";
import { Checkbox, cn } from "@nextui-org/react";
import React from "react";

function CustomCheckbox({
  value,
  isSelectedProp,
  onValueChangeProp,
}: {
  value: string;
  // Below code to remove
  isSelectedProp?: boolean;
  onValueChangeProp?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Checkbox
      classNames={{
        base: cn(
          "flex bg-primary-100",
          " rounded-lg ",
          "data-[selected=true]:bg-primary-500 "
        ),
        wrapper: "text-primary-400  ",
        label: "w-full text-primary-400 data-[selected=true]:text-white",
      }}
      placeholder={"what is happening"}
      isSelected={isSelectedProp}
      onValueChange={onValueChangeProp}
      size="lg"
      color="primary"
      radius="full"
    >
      {value}
    </Checkbox>
  );
}

export default CustomCheckbox;
