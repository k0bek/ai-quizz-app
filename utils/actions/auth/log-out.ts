"use server";

import { z } from "zod";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { logOutUrl } from "@/constants/api";

export const logOutUser = async () => {
  try {
    axios.post(
      logOutUrl,
      {},
      {
        withCredentials: true,
      }
    );

    cookies().delete("accessToken");
    cookies().delete("refreshToken");
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.detail);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
