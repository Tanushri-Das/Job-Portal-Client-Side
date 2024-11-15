import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Job } from "@/types";
import Heading from "@/components/Heading";
import JobCard from "@/components/JobCard";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);
  return (
    <div className="my-14 w-[90%] mx-auto">
      <Heading
        mainHeading="Explore All Job Opportunities"
        subHeading="Find your next career move among various industries and locations"
      />
      <div className="my-[2rem]">
        <h1 className="text-lg font-semibold">Show Result : {allJobs.length}</h1>
      </div>
      <div className="space-y-8">
        {allJobs?.map((job) => {
          return (
            <Link to={`/jobdetails/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllJobs;
