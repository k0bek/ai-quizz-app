import { refreshTokenUrl } from "@/constants/api";
import axiosInstance from "../axiosInstance";
import Cookies from "js-cookie"; // Ensure you have js-cookie installed

let isRefreshing = false; // Flag to track if a refresh is in progress
type TokenType = string;

type SubscriberCallback = (
  accessToken: TokenType,
  refreshToken: TokenType
) => void;
let subscribers: SubscriberCallback[] = [];
const onRefreshed = (accessToken: TokenType, refreshToken: TokenType): void => {
  subscribers.forEach((callback) => callback(accessToken, refreshToken));
  subscribers = []; // Clear the subscribers after refreshing
};

const subscribeTokenRefresh = (callback: SubscriberCallback): void => {
  subscribers.push(callback);
};

export const refreshToken = async () => {
  if (isRefreshing) {
    // If a refresh is already in progress, return a promise that resolves when done
    return new Promise((resolve) => {
      subscribeTokenRefresh((accessToken: string, refreshToken: string) => {
        resolve({ accessToken, refreshToken });
      });
    });
  }

  isRefreshing = true;

  try {
    const response = await axiosInstance.post(refreshTokenUrl);

    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data;

      // Clear existing tokens
      Cookies.remove("AccessToken");
      Cookies.remove("RefreshToken");

      // Set new tokens in cookies with expiration
      Cookies.set("AccessToken", accessToken, { expires: 1 });
      Cookies.set("RefreshToken", refreshToken, { expires: 7 });

      onRefreshed(accessToken, refreshToken);
      return { accessToken, refreshToken };
    }
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw new Error("Could not refresh token");
  } finally {
    isRefreshing = false;
  }
};
