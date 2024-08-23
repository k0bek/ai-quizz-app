"use server";

import axios, { AxiosError } from "axios";
import { currentProfileUrl } from "@/constants/api";
import { cookies } from "next/headers";

export const getCurrentProfile = async () => {
  const token = cookies().get("AccessToken")?.value;
  try {
    const response = await axios.get(currentProfileUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
      throw new Error(error.response?.data?.detail);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
