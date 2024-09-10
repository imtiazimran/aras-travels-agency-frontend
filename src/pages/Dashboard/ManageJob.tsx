/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import {
  useDeleteJobMutation,
  useGetJobsQuery,
} from "../../redux/features/job/jobApi";
import { BarLoader } from "../../utils/Loading";

export function JobTable() {
  const { data, isLoading } = useGetJobsQuery(undefined);
  const [deleteJob] = useDeleteJobMutation();

  // Delete job
  const handleDelete = async (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this job?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteJob(id);
        console.log(response);
        if (response.data.success) {
          Swal.fire("Deleted!", "The job has been deleted.", "success");
        } else {
          Swal.fire("Error", "There was an error deleting the job.", "error");
        }
      }
    });
  };
  return (
    <div className="w-full p-4">
      <div className="overflow-x-auto">
        {isLoading && (
          <tr className="flex items-center justify-center w-full">
            <BarLoader />
          </tr>
        )}
        <table className="min-w-full table-fixed">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-2 py-1 sm:px-4 sm:py-2">Title</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2">Country</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2">Vacancy</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2">Salary Range</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2">Job Type</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2">Status</th>
              <th className="px-2 py-1 sm:px-4 sm:py-2">Actions</th>
            </tr>
          </thead>
          <AnimatePresence>
            <tbody>
              {data?.data?.map((job: any) => (
                <motion.tr
                  key={job.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="border-b bg-gray-800 border-gray-700 text-white text-center"
                >
                  <td className="py-2 px-2 sm:px-4">{job.title}</td>
                  <td className="py-2 px-2 sm:px-4">{job.country}</td>
                  <td className="py-2 px-2 sm:px-4">{job.vacancy}</td>
                  <td className="py-2 px-2 sm:px-4">
                    {job.minimum} - {job.maximum}
                  </td>
                  <td className="py-2 px-2 sm:px-4">{job.job_type}</td>
                  <td className="py-2 px-2 sm:px-4">{job.status}</td>
                  <td className="py-2 px-2 sm:px-4">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(job._id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </AnimatePresence>
        </table>
      </div>
    </div>
  );
}
