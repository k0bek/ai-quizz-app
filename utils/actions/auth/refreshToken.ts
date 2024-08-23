import { refreshTokenUrl } from "@/constants/api";
import axiosInstance from "../axiosInstance";
import Cookies from "js-cookie"; // Ensure you have js-cookie installed

let isRefreshing = false; // Flag to track if a refresh is in progress
let subscribers = []; // Array to hold subscribers while refreshing

const onRefreshed = (accessToken, refreshToken) => {
  subscribers.forEach((callback) => callback(accessToken, refreshToken));
  subscribers = []; // Clear the subscribers after refreshing
};

const subscribeTokenRefresh = (callback) => {
  subscribers.push(callback);
};

export const refreshToken = async () => {
  if (isRefreshing) {
    // If a refresh is already in progress, return a promise that resolves when done
    return new Promise((resolve) => {
      subscribeTokenRefresh((accessToken, refreshToken) => {
        resolve({ accessToken, refreshToken });
      });
    });
  }

  isRefreshing = true; // Set the flag to true

  try {
    const response = await axiosInstance.post(refreshTokenUrl);

    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data;

      // Clear existing tokens
      Cookies.remove("AccessToken");
      Cookies.remove("RefreshToken");

      // Set new tokens in cookies with expiration
      Cookies.set("AccessToken", accessToken, { expires: 1 }); // Expires in 1 day
      Cookies.set("RefreshToken", refreshToken, { expires: 7 }); // Expires in 7 days

      onRefreshed(accessToken, refreshToken); // Notify subscribers
      return { accessToken, refreshToken }; // Return new tokens
    }
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw new Error("Could not refresh token");
  } finally {
    isRefreshing = false; // Reset the flag after completion
  }
};
