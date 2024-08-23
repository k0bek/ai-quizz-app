import axiosInstance from "../axiosInstance";
import Cookies from "js-cookie"; // Ensure you have js-cookie installed

export const refreshToken = async () => {
  try {
    // Call the refresh token endpoint
    const response = await axiosInstance.post("/auth/refresh-token"); // Adjust the endpoint as needed

    // If the response is successful, update the cookies with new tokens
    if (response.status === 200) {
      const { accessToken, refreshToken } = response.data;

      // Clear existing tokens
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      // Set new tokens in cookies with expiration
      Cookies.set("accessToken", accessToken, { expires: 1 }); // Expires in 1 day
      Cookies.set("refreshToken", refreshToken, { expires: 7 }); // Expires in 7 days

      return { accessToken, refreshToken }; // Return new tokens
    }
  } catch (error) {
    // Handle error (e.g., log out user, redirect, etc.)
    console.error("Failed to refresh token:", error);

    // Optional: handle specific error cases (401, network error, etc.)
    if (error.response && error.response.status === 401) {
      // Redirect to login or perform logout action
      console.warn("Unauthorized! Redirecting to login.");
      // You can implement a logout function or redirect here
    }

    throw new Error("Could not refresh token"); // Throw an error to be handled by the caller
  }
};
