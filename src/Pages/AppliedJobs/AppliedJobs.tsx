import AppliedJobsCard from "@/components/AppliedJobsCard";
import FilterJobs from "@/components/FilterJobs";
import Heading from "@/components/Heading";
import useAppliedJobs from "@/Hooks/useAppliedJobs";
import type { AppliedJobs } from "@/types";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const [appliedJobs] = useAppliedJobs();
  console.log("appliedJobs:", appliedJobs);

  const [filteredJobs, setFilteredJobs] = useState<AppliedJobs[]>([]);

  // Update filteredJobs when appliedJobs changes
  useEffect(() => {
    if (appliedJobs.length > 0) {
      setFilteredJobs(appliedJobs);
    }
  }, [appliedJobs]);

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
        {filteredJobs.map((job: AppliedJobs) => (
          <AppliedJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
