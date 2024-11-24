import { Job } from "@/types";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "./theme-provider";

const JobCard = ({ job }: { job: Job }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Distance to trigger animation
      easing: "ease-in-out",
    });
  }, []);
  const { theme } = useTheme();
  return (
    <div
      data-aos="zoom-out"
      className={`p-4 mb-6 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 rounded-lg border-opacity-10 ${
        theme === "dark" ? "border-gray-100" : "border-gray-500"
      }`}
    >
      <div className="flex items-center space-x-6">
        <div>
          <img src={job.image} alt={job.role} className="w-[100px] h-[100px]" />
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-2">{job.role}</h1>
          <div className="flex items-center space-x-4 md:space-x-10">
            <div className="flex items-center space-x-2">
              <FaMapLocation className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p
                className={`text-[16px] font-semibold ${
                  theme === "dark"
                    ? "text-gray-200"
                    : "text-black text-opacity-60"
                }`}
              >
                {job.office_location}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700" />
              <p
                className={`text-[16px] font-semibold ${
                  theme === "dark"
                    ? "text-gray-200"
                    : "text-black text-opacity-60"
                }`}
              >
                {job.salary}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 mt-4">
            <div
              className={`text-[16px] px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-medium capitalize bg-green-400 ${
                theme === "dark"
                  ? "text-gray-200"
                  : "text-black text-opacity-80"
              }`}
            >
              {job.location}
            </div>
            <div
              className={`text-[16px] px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-medium capitalize bg-red-400 ${
                theme === "dark"
                  ? "text-gray-200"
                  : "text-black text-opacity-80"
              }`}
            >
              {job.job_type}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
