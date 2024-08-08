import React from "react";
import Image from "next/image";
import SignUpForm from "../components/SignUpForm";
function SignUp() {
  return (
    <main className=" h-screen text-white flex items-center">
      <div className="md:w-[34.38rem] place-self-center pt-7 rounded-lg bg-primary-foreground mx-auto">
        <picture>
          <Image
            alt="learngo"
            className="mx-auto"
            src="/assets/logo.svg"
            width={180}
            height={100}
          />
        </picture>
        <h1 className="p-5">Please enter your user information</h1>
        <SignUpForm />
      </div>
    </main>
  );
}

export default SignUp;
