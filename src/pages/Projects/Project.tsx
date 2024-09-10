/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useGetJobsQuery } from "../../redux/features/job/jobApi";
import Navbar from "../../components/Nav";

const Project = () => {
  const { data } = useGetJobsQuery(undefined);
  console.log(data);
  return (
    <div className="flex items-center gap-4 flex-wrap bg-black/80 justify-center min-h-screen">
      <Navbar />
      {data?.data?.map((job: any) => (
        <motion.div
          key={job._id} // Added the key prop
          whileHover="hover"
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          variants={{
            hover: {
              scale: 1.05,
            },
          }}
          className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
        >
          <div className="relative z-10 text-white mb-10 h-full overflow-auto thin-scrollbar">
            <motion.span
              initial={{ scale: 0.85 }}
              variants={{
                hover: {
                  scale: 1,
                },
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              className="my-2 block origin-top-left font-mono text-2xl font-black leading-[1.2]"
            >
              {job.title}
            </motion.span>

            {/* Content container with overflow handling */}
            <div className="max-h-[80%] overflow-auto thin-scrollbar">
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Job Type:</strong> {job.job_type}</p>
              <p><strong>Country:</strong> {job.country}</p>
              <p><strong>Minimum Salary:</strong> {job.minimum}</p>
              <p><strong>Maximum Salary:</strong> {job.maximum}</p>
              <p><strong>Requirement:</strong> {job.requirement}</p>
              <p><strong>Status:</strong> {job.status}</p>
              <p><strong>Vacancies:</strong> {job.vacancy}</p>
            </div>
          </div>

          <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
            Apply
          </button>

          <Background />
        </motion.div>
      ))}
    </div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default Project;
