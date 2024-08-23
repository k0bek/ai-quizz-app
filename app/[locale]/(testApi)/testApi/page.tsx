"use client";
import { userProfile } from "@/constants/api";
import { axiosInstance } from "@/utils/actions/axiosInstance";
import axios from "axios";
import React, { useEffect, useState } from "react";
const Page = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(userProfile); // Adjust the endpoint as needed
        setData(response.data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Test API</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Page;
