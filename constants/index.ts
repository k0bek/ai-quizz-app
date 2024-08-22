"use client";
import { routes } from "@/routes";
import { useTranslations } from "next-intl";

export const NavbarLinks = () => {
  const t = useTranslations("Navbar");
  const navbarLinksList = [
    {
      label: "Dashboard",
      route: routes.dashboard,
    },
    {
      label: t("profile"),
      route: routes.profile,
    },
  ];

  return navbarLinksList;
};
