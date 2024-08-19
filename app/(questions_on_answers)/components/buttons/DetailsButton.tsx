import { Button } from "@nextui-org/react";
import React from "react";

type Props = {};

const DetailsButton = (props: Props) => {
  return (
    <Button
      variant="solid"
      color="default"
      size="sm"
      radius="sm"
      className="text-white"
    >
      Details
    </Button>
  );
};

export default DetailsButton;
