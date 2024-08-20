export const signUp = async (data: FormData) => {
  // Extract the email and password from FormData
  const email = data.get("email")?.toString();
  const password = data.get("password")?.toString();

  const options = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  try {
    const response = await fetch(
      "https://mlab2024-backend.yellowocean-31330507.westeurope.azurecontainerapps.io/api/auth/signin",
      options
    );

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
