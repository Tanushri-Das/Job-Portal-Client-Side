import JobCard from "@/components/JobCard";
import { Job } from "@/types";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData() as Job;
  console.log(job);

  return (
    <div className="my-14">
      <div className="block sm:flex items-center justify-between w-[90%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={job} />
        </div>
        <div>
          <button className="px-10 rounded-lg py-3 bg-blue-600 text-white font-semibold transition-all duration-300">
            Apply
          </button>
        </div>
      </div>
      <div className="mt-12 w-[90%] mx-auto">
        <h1 className="text-xl font-semibold">Job Description</h1>
        <p className="mt-4 text-black text-opacity-70">{job.job_description}</p>
        <h1 className="text-xl font-semibold mt-6">Key Responsibilities</h1>
        <p className="mt-4 text-black text-opacity-70">{job.job_responsibility}</p>
        <h1 className="text-xl font-semibold mt-6">Educational Requirements</h1>
        <p className="mt-4 text-black text-opacity-70">{job.educational_requirements}</p>
        <h1 className="text-xl font-semibold mt-6">Experiences</h1>
        <p className="mt-4 text-black text-opacity-70">{job.experiences}</p>
      </div>
    </div>
  );
};

export default JobDetails;
