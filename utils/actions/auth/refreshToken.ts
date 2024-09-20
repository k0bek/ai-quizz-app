import { refreshTokenUrl } from "@/constants/api";
import axiosInstance from "../../axiosInstance";
import Cookies from "js-cookie";

let isRefreshing = false;
type TokenType = string;

type SubscriberCallback = (
  accessToken: TokenType,
  refreshToken: TokenType
) => void;
let subscribers: SubscriberCallback[] = [];
const onRefreshed = (accessToken: TokenType, refreshToken: TokenType): void => {
  subscribers.forEach((callback) => callback(accessToken, refreshToken));
  subscribers = [];
};

const subscribeTokenRefresh = (callback: SubscriberCallback): void => {
  subscribers.push(callback);
};

export const refreshToken = async () => {
  if (isRefreshing) {
    return new Promise((resolve) => {
      subscribeTokenRefresh((accessToken: string, refreshToken: string) => {
        resolve({ accessToken, refreshToken });
      });
    });
  }

  isRefreshing = true;

  try {
    const refreshToken = Cookies.get("RefreshToken");

    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axiosInstance.post(refreshTokenUrl, {
      refreshToken,
    });

    if (response.status === 200) {
      const { accessToken, refreshToken: newRefreshToken } = response.data;

      Cookies.set("AccessToken", accessToken, {
        expires: new Date(Date.now() + 5 * 60 * 1000),
      });
      Cookies.set("RefreshToken", newRefreshToken, {
        expires: new Date(Date.now() + 5 * 60 * 1000),
      });

      onRefreshed(accessToken, newRefreshToken);
      return { accessToken, newRefreshToken };
    }
  } catch (error) {
    console.error("Failed to refresh token:", error);
    Cookies.set("AccessToken", "", { expires: new Date(0) });
    Cookies.set("RefreshToken", "", { expires: new Date(0) });
    throw new Error("Could not refresh token");
  } finally {
    isRefreshing = false;
  }
};
