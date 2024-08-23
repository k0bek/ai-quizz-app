import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie for client-side cookie handling
import { refreshToken } from "./auth/refreshToken";
import { API_BASE_URL } from "@/constants/api";

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
    if (error.response?.status === 401) {
      console.log("Call the refresh token api here");
      const originalRequest = error.config; // Store original request
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Call your refreshToken function to get new access token
          const newTokens = (await refreshToken()) as newTokens; // Handle refresh and cookie management in this function

          // Update the Authorization header with the new access token
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${newTokens.AccessToken}`;
          return axiosInstance(originalRequest); // Retry the original request
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          // Handle logout or redirect to login if necessary
        }
      }
    }
    return Promise.reject(error); // Reject if not a 401 error
  }
);

export default axiosInstance; // Export the configured Axios instance
