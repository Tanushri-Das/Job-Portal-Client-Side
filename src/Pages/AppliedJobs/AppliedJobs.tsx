import AppliedJobsCard from "@/components/AppliedJobsCard";
import Heading from "@/components/Heading";
import useAppliedJobs from "@/Hooks/useAppliedJobs";
import type { AppliedJobs } from "@/types";

const AppliedJobs = () => {
  const [appliedJobs] = useAppliedJobs();

  return (
    <div className="my-14 w-[90%] mx-auto">
      <Heading
        mainHeading="Applied Jobs"
        subHeading="Review the jobs you've applied for and track their status."
      />
      <div className="my-[2rem]">
        <h1 className="text-lg font-semibold">
          Show Result: {appliedJobs.length}
        </h1>
      </div>
      <div className="space-y-8">
        {appliedJobs.length === 0 ? (
          <p>Loading or no jobs found...</p>
        ) : (
          appliedJobs.map((job: AppliedJobs) => (
            <AppliedJobsCard key={job._id} job={job} />
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
