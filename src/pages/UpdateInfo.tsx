/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { cn } from "../components/lib/cn";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Spotlight } from "../components/ui/Spotlight";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useGetMeQuery, useUpdateUserMutation } from "../redux/features/auth/authApi";

export function UpdateInfo() {
  const { data } = useGetMeQuery(undefined);
  const [updateUser] = useUpdateUserMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); // Use navigate to handle redirects

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const updateData = {
      name: values.name,
      email: data?.data?.email,
      number: values.phone,
      address: values.address,
      picture: data?.data?.picture,
      role: data?.data?.role,
    };

    const response = await updateUser(updateData).unwrap();
    console.log(response);
    try {
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your information has been updated successfully!",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/"); // Redirect to home page on success
        });
      } else if(response.errorSources) {
        console.log(response.errorSources[0]);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was an issue updating your information. Please try again.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while updating your information.",
      });
    }
  };

  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
        <h2 className="font-bold text-xl text-neutral-200">Welcome to Av Visa Agency</h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">Please Update your Contact info</p>

        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input {...register("name")} defaultValue={data?.data?.name} id="name" placeholder="Tyler" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input {...register("email")} defaultValue={data?.data?.email} id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="phone">Phone</Label>
            <Input defaultValue={data?.data?.number} {...register("phone")} id="phone" placeholder="01764467734" type="text" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="address">Your Address</Label>
            <Input defaultValue={data?.data?.address} id="address" placeholder="Mirpur 1, Dhaka, Bangladesh" type="text" {...register("address")} />
          </LabelInputContainer>

          <button className="bg-gradient-to-br relative group/btn from-zinc-900  to-neutral-600 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]" type="submit">
            Update &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-900 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
