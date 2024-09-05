"use server";
import axios, { AxiosError } from "axios";
import { API_BASE_URL, updateQuizStatusUrl } from "@/constants/api";
import { cookies } from "next/headers"; 

export const updateQuizStatus = async (
  id: string,
  newStatus: "Active" | "Inactive"
) => {
  try {
    const access = cookies().get("AccessToken")?.value;
    console.log(id);
    console.log("AccessToken:", access);

    if (!access) {
      throw new Error("Access token is missing");
    }

    const payload = newStatus;

    console.log("Payload:", JSON.stringify(payload));

    const result = await axios.patch(
      `${updateQuizStatusUrl}/${id}/status`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${access}`,
          "Content-Type": "application/json", 
        },
      }
    );

    
    return result.data;
  } catch (error) {
    
    if (error instanceof AxiosError) {
      console.error("Axios error:", error.response?.data || error.message);
      throw error || new Error("Failed to update quiz status");
    } else {
      
      console.error("Unexpected error:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};