/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { cn } from "../../components/lib/cn";
import { useCreateJobMutation } from "../../redux/features/job/jobApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function CreateJob() {
  const [createJob] = useCreateJobMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate(); 
  
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const jobData = {
      title: values.title,
      country: values.country,
      description: values.description,
      requirement: values.requirement,
      minimum: Number(values.minimum),
      maximum: Number(values.maximum),
      vacancy: values.vacancy,
      job_type: values.job_type,
      status: values.status,
    };

    const response = await createJob(jobData).unwrap();
    try {
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your information has been updated successfully!",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/dashboard/manageJobs"); 
        });
      } else if (response.errorSources) {
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
    <div className=" w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-auto">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
        <h2 className="font-bold text-xl text-neutral-200">Job Information</h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Please provide the job details
        </p>

        <form className="my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="title">Job Title</Label>
              <Input
                {...register("title")}
                id="title"
                placeholder="Software Engineer"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="country">Country</Label>
            <Input
              {...register("country")}
              id="country"
              placeholder="Bangladesh"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="description">Job Description</Label>
            <Input
              {...register("description")}
              id="description"
              placeholder="Job description here"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="requirement">Requirements</Label>
            <Input
              {...register("requirement")}
              id="requirement"
              placeholder="Requirements for the job"
              type="text"
            />
          </LabelInputContainer>
          <div className="flex gap-1">
            <LabelInputContainer className="mb-4">
              <Label htmlFor="minimum">Minimum Salary</Label>
              <Input
                {...register("minimum")}
                id="minimum"
                placeholder="minimum salary"
                type="number"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="maximum">Maximum Salary</Label>
              <Input
                {...register("maximum")}
                id="maximum"
                placeholder="maximum salary"
                type="number"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="vacancy">Vacancy</Label>
            <Input
              {...register("vacancy")}
              id="vacancy"
              placeholder="vacancy"
              type="number"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="job_type">Job Type</Label>
            <select
              {...register("job_type")}
              id="job_type"
              className="input-select"
            >
              <option value="full_time">Full Time</option>
              <option value="part_time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="status">Job Status</Label>
            <select
              {...register("status")}
              id="status"
              className="input-select"
            >
              <option value="active">Active</option>
              <option value="closed">Closed</option>
            </select>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-zinc-900 to-neutral-600 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Update Job &rarr;
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

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
