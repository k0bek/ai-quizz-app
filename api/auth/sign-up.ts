import { signUpUrl } from "@/constants/api";

export const signUp = async (email: string, password: string) => {
  // Extract the email and password from FormData

  try {
    const response = await fetch(signUpUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      // Optionally, log or handle different status codes
      console.error(`HTTP error! status: ${response.status}`);
      return false;
    }

    const json = await response.json();

    // Return the response JSON if it exists
    return json;
  } catch (error) {
    // Log the error and return false
    console.error("Error during sign-up:", error);
    return false;
  }
};
