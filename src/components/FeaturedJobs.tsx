import Heading from "./Heading";
import { Link } from "react-router-dom";
import { Job } from "@/types";
import JobCard from "./JobCard";
import useJobs from "@/Hooks/useJobs";
import Button from "./Button";

const FeaturedJobs = () => {
  const [jobs] = useJobs();

  return (
    <div className="pb-14 overflow-x-hidden">
      <Heading
        mainHeading="Featured Jobs"
        subHeading="Know your worth and find the job that qualify your life"
      />
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-9 gap-12 items-center">
        {jobs?.slice(0, 6).map((job: Job) => (
          <Link to={`/jobdetails/${job._id}`} key={job._id}>
            <JobCard job={job} />
          </Link>
        ))}
      </div>
      <Link to="/alljobs">
        <div className="text-center mt-8">
          <Button name={"View All Jobs"} />
        </div>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
