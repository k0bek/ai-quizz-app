import { signUpUrl } from "@/constants/api";

export const signUp = async (email: string, password: string) => {
  try {
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      return false;
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error during sign-up:", error);
    return false;
  }
};
