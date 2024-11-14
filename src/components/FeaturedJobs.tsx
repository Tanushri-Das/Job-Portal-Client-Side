import { useEffect, useState } from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { Job } from "@/types";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data));
  }, []);
  return (
    <div className="pb-14">
      <Heading
        mainHeading="Featured Jobs"
        subHeading="Know your worth and find the job that qualify your life"
      />
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-9 gap-12 items-center">
        {featuredJobs?.map((job) => {
          return (
            <Link to={`/job/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          );
        })}
      </div>
      <Link to="/alljobs">
        <div className="text-center mt-8">
          <button className="px-8 py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 rounded-lg text-white">
            View All Job
          </button>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
