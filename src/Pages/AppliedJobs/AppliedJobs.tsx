import AppliedJobsCard from "@/components/AppliedJobsCard";
import FilterJobs from "@/components/FilterJobs";
import Heading from "@/components/Heading";
import useAppliedJobs from "@/Hooks/useAppliedJobs";
import { useState } from "react";
import type { AppliedJobs } from "@/types";

const AppliedJobs = () => {
  const [appliedJobs] = useAppliedJobs();
  const [filteredJobs, setFilteredJobs] = useState<AppliedJobs[]>(appliedJobs);

  // Handle filtering
  const handleFilter = (filter: string) => {
    if (filter) {
      const filtered = appliedJobs.filter(
        (job: AppliedJobs) => job.remote_or_onsite === filter
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(appliedJobs);
    }
  };

  return (
    <div className="my-14 w-[90%] mx-auto">
      <Heading
        mainHeading="Applied Jobs"
        subHeading="Review the jobs you've applied for and track their status."
      />
      <div className="my-[2rem] flex flex-col sm:flex-row sm:justify-between items-center">
        <h1 className="text-lg font-semibold">
          Show Result: {filteredJobs.length}
        </h1>
        <FilterJobs onFilter={handleFilter} />
      </div>
      <div className="space-y-8">
        {filteredJobs.length === 0 ? (
          <p>Loading or no jobs found...</p>
        ) : (
          filteredJobs.map((job: AppliedJobs) => (
            <AppliedJobsCard key={job._id} job={job} />
          ))
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
