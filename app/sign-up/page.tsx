import { Input } from "@nextui-org/react";
import React from "react";
import SignUpForm from "../(signup)/components/forms/SignUpForm";
import learnGO from "../logo.svg";
import Image from "next/image";
function SignUp() {
  return (
    <main className=" h-screen text-white flex items-center ">
      <div className="md:w-[34.38rem] place-self-center pt-7 rounded-lg bg-primary-foreground mx-auto">
        <picture>
          <Image alt="learngo" className="mx-auto" src={learnGO} />
        </picture>
        <h1 className="p-5">Please enter your user information</h1>
        <SignUpForm />
      </div>
    </main>
  );
}

export default SignUp;
