import { Link } from "react-router-dom";
import { Job } from "@/types";
import Heading from "@/components/Heading";
import JobCard from "@/components/JobCard";
import useJobs from "@/Hooks/useJobs";

const AllJobs = () => {
  const [jobs] = useJobs();

  return (
    <div className="my-14 w-[90%] mx-auto overflow-x-hidden">
      <Heading
        mainHeading="Explore All Job Opportunities"
        subHeading="Find your next career move among various industries and locations"
      />
      <div className="my-[2rem]">
        <h1 className="text-lg font-semibold">Show Result : {jobs.length}</h1>
      </div>
      <div className="space-y-8">
        {jobs?.map((job: Job) => {
          return (
            <Link to={`/jobdetails/${job._id}`} key={job._id}>
              <JobCard job={job} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllJobs;
