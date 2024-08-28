import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie for client-side cookie handling
import { API_BASE_URL, refreshTokenUrl } from "@/constants/api";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // Base URL for your API
  withCredentials: true, // Include credentials (cookies, HTTP auth) with requests
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = Cookies.get("AccessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response, // Directly return successful responses.
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
      try {
        const refreshToken = Cookies.get("RefreshToken"); // Retrieve the stored refresh token.
        console.log(refreshToken);
        // Make a request to your auth server to refresh the token.
        const response = await axios.post(refreshTokenUrl, {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        // Store the new access and refresh tokens.
        Cookies.set("AccessToken", accessToken);
        Cookies.set("RefreshToken", newRefreshToken);
        // Update the authorization header with the new access token.
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest); // Retry the original request with the new access token.
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.error("Token refresh failed:", refreshError);
        // Cookies.remove("AccessToken");
        // Cookies.remove("RefreshToken");
        // return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error); // For all other errors, return the error as is.
  }
);

export default axiosInstance; // Export the configured Axios instance
