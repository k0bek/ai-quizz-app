import { createQuizRoutes, navbarLinks } from "@/constants";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function BackToDashboard() {
  return (
    <Button variant="solid" color="primary">
      <Link href={navbarLinks[0].route}>Back to dashboard</Link>
    </Button>
  );
}

export default BackToDashboard;
