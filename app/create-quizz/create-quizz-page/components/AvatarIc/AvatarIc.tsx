import Image from "next/image";
import React from "react";
import AvatarIcs from "../../../../../public/assets/Avatar.svg";
const AvatarIc = () => {
  return (
    <>
      <Image src={AvatarIcs} alt={"avatarIcon"} />
    </>
  );
};

export default AvatarIc;
