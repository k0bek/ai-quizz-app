import TickCircle from "@/app/(create-quiz)/create-quiz-configure-quiz/components/TickCircle";
import { Chip } from "@nextui-org/react";
import React from "react";
type ChipStatusProp = {
  status: "stopped" | "finished" | "in-progress";
};

const StatusChip = ({ status }: ChipStatusProp) => {
  return (
    <Chip
      variant="bordered"
      size="md"
      radius="full"
      color="default"
      className="w-full"
    >
      {status}
    </Chip>
  );
};

export default StatusChip;
