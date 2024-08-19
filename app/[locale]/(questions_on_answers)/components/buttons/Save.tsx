import { Button } from "@nextui-org/react";
import React from "react";

const Save = () => {
  return (
    <Button
      className="flex self-end"
      variant="solid"
      color="primary"
      radius="sm"
      size="lg"
      type="submit"
    >
      Save
    </Button>
  );
};

export default Save;
