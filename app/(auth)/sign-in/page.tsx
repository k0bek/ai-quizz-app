import SignInForm from "../components/sign-in-form";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="bg-content2-foreground p-8 rounded-xl sm:w-[32rem] w-full shadow-2xl">
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          width={180}
          height={100}
          className="mx-auto"
        />
        <p className="text-sm font-semibold text-primary mt-4">
          Please enter your user information.
        </p>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
