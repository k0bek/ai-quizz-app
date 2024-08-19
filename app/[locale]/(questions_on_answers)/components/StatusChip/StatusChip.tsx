import { Chip } from "@nextui-org/react";
import React from "react";
import CheckIcon from "../CheckIcon";
type ChipStatusProp = {
  status: "Stopped" | "Finished";
};

const StatusChip = ({ status }: ChipStatusProp) => {
  return (
    <Chip
      variant="dot"
      size="md"
      radius="full"
      color={status === "Finished" ? "success" : "warning"}
      className="w-full flex items-center"
      startContent={
        status === "Stopped" ? (
          <CheckIcon color="success" size={20} />
        ) : (
          <CheckIcon color="warning" size={20} />
        )
      }
    >
      {status}
    </Chip>
  );
};

export default StatusChip;
