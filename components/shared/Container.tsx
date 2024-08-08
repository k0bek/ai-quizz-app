import { cn } from "@/lib";
import { ReactNode } from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("h-full mx-auto w-full px-4 md:px-20", className)}>
      {children}
    </div>
  );
};

export default Container;
