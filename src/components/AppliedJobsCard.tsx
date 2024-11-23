import { AppliedJobs } from "@/types";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AppliedJobsCard = ({ job }: { job: AppliedJobs }) => {
  return (
    <div className="p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-3 md:space-x-6">
        <div className="flex items-center space-x-6">
          <div>
            <img
              src={job.image}
              alt={job.role}
              className="w-[100px] h-[100px]"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold mb-2">{job.role}</h1>
            <div className="flex items-center space-x-4 md:space-x-10">
              <div className="flex items-center space-x-2">
                <FaMapLocation className="w-[0.8rem] h-[0.8rem] text-pink-700" />
                <p className="text-[16px] text-black font-semibold text-opacity-60">
                  {job.location}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700" />
                <p className="text-[16px] text-black font-semibold text-opacity-60">
                  {job.salary}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 mt-4">
              <div className="text-[16px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400">
                {job.location}
              </div>
              <div className="text-[16px] text-black text-opacity-80 px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400">
                {job.job_type}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Link to={`/jobdetails/${job.jobId}`}>
            <button className="px-6 rounded-lg py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
