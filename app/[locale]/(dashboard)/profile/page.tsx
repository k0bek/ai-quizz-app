"use client";

import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import React from "react";

const ProfilePage = () => {
  const router = useRouter();

  const handleUpdate = () => {
    // profile update
    console.log("Update profile with name:", name);
  };

  const handleDelete = () => {
    // remove account logic
    if (window.confirm("Are you sure you want to delete your account?")) {
      console.log("Delete account");

      router.push("/login");
    }
  };

  return (
    <section className="py-8 w-full md:max-w-7xl">
      <h1 className="text-4xl font-bold mb-4 text-foreground-700">Profile</h1>
      <p className="text-foreground-600 mb-4 text-medium md:text-large">
        Manage your profile settings here.
      </p>
      <hr className="mb-4" />
      <div className="bg-[#F4F4F5] rounded-md p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <label className="text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Robert Mlab"
            className="p-3 rounded-lg shadow-sm"
          />
          <p className="text-foreground-500 text-sm">
            This is your public display name.
          </p>
          <Button
            variant="solid"
            className="bg-base-primary text-white w-min py-5"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-medium">Delete Account</h2>
          <p className="text-small text-foreground-500 -mt-1">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <Button
            className="transition-all hover:bg-danger-500 text-white px-4 text-medium w-min py-5"
            onClick={handleDelete}
            variant="solid"
            color="danger"
          >
            Delete
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
