import { locales, type Locale } from "@/config/locales";
import createMiddleware from "next-intl/middleware";

const middleware = createMiddleware({
  locales,
  defaultLocale: "pl" satisfies Locale,
  localePrefix: "never",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

export default middleware;
