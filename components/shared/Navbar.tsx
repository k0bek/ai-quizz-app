"use client";

import { cn } from "@/lib";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavbarLinks } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();
  const navbarLinksList = NavbarLinks();

  return (
    <nav className="w-full md:w-min">
      <ul className="flex flex-row md:flex-col gap-2 justify-between md:justify-start w-full md:w-min mt-10">
        {navbarLinksList.map((link) => {
          const isActive = link.route === pathname;
          return (
            <li key={link.route} className="w-1/2 md:w-40">
              <Link href={link.route}>
                <div
                  className={cn(
                    "text-foreground-800 text-medium p-2 rounded-lg",
                    isActive && "bg-foreground-100"
                  )}
                >
                  {link.label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
