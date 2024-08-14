import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import AvatarIc from "./AvatarIc/AvatarIc";
const User = () => {
  return (
    <aside className="flex items-center justify-end p-6 w-full md:w-[82rem]  mx-auto  md:pt-6 md:pb-6 md:pr-[3.75rem] md:pl-[3.75rem]">
      <Avatar
        showFallback
        color="default"
        icon={<AvatarIc />}
        src="https://images.unsplash.com/broken"
      />
    </aside>
  );
};

export default User;
