import { cookies } from "next/headers";

const useRefreshToken = async () => {
  const currentToken = cookies().get("");
  const refreshToken = cookies().get("refreshToken");
  const expires = Date.now();
  if (refreshToken) {
    setTimeout(() => {});
  }
};
