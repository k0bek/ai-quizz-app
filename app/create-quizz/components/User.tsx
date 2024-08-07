import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const User = () => {
  return (
    <aside className="flex items-center justify-end p-6">
      <picture>
        <Avatar />
      </picture>
    </aside>
  );
};

export default User;
