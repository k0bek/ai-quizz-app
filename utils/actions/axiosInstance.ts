import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie for client-side cookie handling
import { refreshToken } from "./auth/refreshToken";
import { API_BASE_URL } from "@/constants/api";
export const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Base URL for your API
  withCredentials: true, // Include credentials (cookies, HTTP auth) with requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (request) => {
    // Get the access token from cookies for server-side usage
    const accessToken = Cookies.get("accessToken"); // For client-side

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
    // Handle token refresh on 401 errors
    if (error.response?.status === 401) {
      const originalRequest = error.config; // Store original request
      if (!originalRequest._retry) {
        // Prevent infinite loop
        originalRequest._retry = true;

        // Call your refreshToken function to get new access token
        const newTokens = await refreshToken(); // You need to implement this

        // Set new tokens in cookies (client-side)
        Cookies.set("accessToken", newTokens.accessToken, { expires: 1 }); // Set with expiry, adjust as needed
        Cookies.set("refreshToken", newTokens.refreshToken, { expires: 7 }); // Longer expiry for refresh token

        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${newTokens.accessToken}`; // Update header
        return axiosInstance(originalRequest); // Retry original request
      }
    }
    return Promise.reject(error); // Reject if not a 401 error
  }
);

export default axiosInstance; // Export the configured Axios instance
