import React, { ReactNode } from "react";

const NavbarContentContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <p className="mb-4">
        Manage your quiz settings here. You can need text gpt
      </p>
      <section className={className}>{children}</section>
    </>
  );
};

export default NavbarContentContainer;
