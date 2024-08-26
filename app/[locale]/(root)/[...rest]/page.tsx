import { Button } from "@nextui-org/react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

const NotFoundPage = async () => {
  const t = await getTranslations("NotFoundPage");
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-5">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-9xl">404</p>
        <p className="text-2xl md:text-4xl text-primary-500">{t("notFound")}</p>
      </div>
      <Link href="/dashboard">
        <Button variant="solid" color="primary">
          {t("goDashboard")}
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
