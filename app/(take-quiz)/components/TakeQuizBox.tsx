"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const TakeQuizBox = () => {
  const takeQuizSchema = z.object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" }),
  });
  type FormData = z.infer<typeof takeQuizSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(takeQuizSchema),
  });

  async function onSubmit(data: FormData) {
    console.log(isSubmitting);
    console.log(data);
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }

  return (
    <div className="bg-default-100 p-6 py-10 rounded-xl flex flex-col items-start gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-foreground-700 text-4xl font-semibold ml-1">
          Take quiz
        </p>
        <span className="text-foreground-600">
          Engage with our quiz designed to evaluate your understanding and
          knowledge on various topics.
        </span>
      </div>
      <div className="flex flex-col w-full -mt-2">
        <label htmlFor="name" className="text-medium text-foreground-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          autoComplete="off"
          className="text-foreground-500 mt-1 text-sm w-full rounded-lg p-3 outline-foreground-700 outline-1"
          {...register("name", { required: true })}
        />
        {errors?.name && (
          <p className="text-red-500 mt-2 text-sm">{errors?.name?.message}</p>
        )}
      </div>

      <div className="border-dashed border-2 border-gray-300 g-[#f4f4f5] p-6 md:justify-between flex flex-col gap-6 shadow-md hover:shadow-lg transition-shadow relative w-full h-auto rounded-lg">
        <div className="flex flex-row justify-between items-start">
          <div>
            <h3 className="font-semibold text-base text-default-700">
              Identify your biggest roadblock to succeeding in cryptocureny
            </h3>
            <p className="text-base font-medium text-default-600 mt-1">
              Description
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="flex items-center -mt-3  px-2 py-1 rounded-lg bg-primary-flat">
            <p className="text-base-primary text-small">Total 5 questions</p>
          </div>
        </div>
        <Button
          variant="solid"
          className="bg-base-primary text-white"
          onClick={handleSubmit(onSubmit)}
        >
          Take quiz
        </Button>
      </div>
    </div>
  );
};

export default TakeQuizBox;
