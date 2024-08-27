import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie for client-side cookie handling
import { refreshToken } from "./auth/refreshToken";
import { API_BASE_URL, refreshTokenUrl } from "@/constants/api";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Base URL for your API
  withCredentials: true, // Include credentials (cookies, HTTP auth) with requests
});

type newTokens = {
  AccessToken: string;
  RefreshToken: string;
};
// Request Interceptor
axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = Cookies.get("AccessToken"); // Get the access token from cookies

    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request; // Continue with the request
  },
  (error) => {
    return Promise.reject(error); // Handle errors
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return the response if successful
  },
  async (error) => {
    const originalRequest = error.config; // Store original request
    if (error.response?.status === 401 && !originalRequest._entry) {
      originalRequest._entry = true;
      console.log("Call the refresh token api here");
      try {
        // Call your refreshToken function to get new access token
        const refreshToken = Cookies.get("RefreshToken");
        const response = (await axios.post(refreshTokenUrl, {
          refreshToken,
        })) as newTokens; // Handle refresh and cookie management in this function
        const data = {
          accessToken: response.AccessToken,
          refreshToken: response.RefreshToken,
        };
        const { accessToken, refreshToken: newRefreshToken } = data;
        Cookies.set("AccessToken", accessToken);
        Cookies.set("RefreshToken", refreshToken as string);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error(`Token refreshed failed: ${refreshError}`);
        Cookies.remove("AccessToken");
        Cookies.remove("RefreshToken");
        window.location.href = "/sign-in";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error); // Reject if not a 401 error
  }
);

export default axiosInstance; // Export the configured Axios instance
