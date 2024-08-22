"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import React from "react";
import { useTranslations } from "next-intl";
import { routes } from "@/routes";

const ProfilePage = () => {
  const router = useRouter();
  const t = useTranslations("Dashboard");

  const handleUpdate = () => {
    // profile update
    console.log("Update profile with name:", name);
  };

  const handleDelete = () => {
    // remove account logic
    if (window.confirm(t("areYouSure"))) {
      console.log("Delete account");
      router.push(routes.signIn);
    }
  };

  return (
    <section className="py-8 w-full md:max-w-7xl">
      <h1 className="text-4xl font-bold mb-4 text-foreground-700">
        {t("profile")}
      </h1>
      <p className="text-foreground-600 mb-4 text-medium md:text-large">
        {t("manageSettings")}
      </p>
      <hr className="mb-4" />
      <div className="bg-[#F4F4F5] rounded-md p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-gray-700" htmlFor="name">
            {t("name")}
          </label>
          <input
            id="name"
            type="text"
            placeholder="Robert Mlab"
            className="p-3 rounded-lg shadow-sm"
          />
          <p className="text-foreground-500 text-sm">{t("displayName")}</p>
          <Button
            variant="solid"
            className="bg-base-primary text-white w-min py-5"
            onClick={handleUpdate}
          >
            {t("updateButton")}
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-medium">{t("deleteAccount")}</h2>
          <p className="text-small text-foreground-500 -mt-1">
            {t("deleteAccountWarningProfile")}
          </p>
          <Button
            className="transition-all hover:bg-danger-500 text-white px-4 text-medium w-min py-5"
            onClick={handleDelete}
            variant="solid"
            color="danger"
          >
            {t("delete")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
