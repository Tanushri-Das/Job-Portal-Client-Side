import JobCard from "@/components/JobCard";
import useAppliedJobs from "@/Hooks/useAppliedJobs";
import useAuth from "@/Hooks/useAuth";
import { AppliedJobs, Job } from "@/types";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {
  const job = useLoaderData() as Job;
  const { user } = useAuth();
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const [appliedJobs] = useAppliedJobs();

  // Check if already applied
  const alreadyApplied = appliedJobs?.some(
    (appliedJob: AppliedJobs) => appliedJob.jobId === job._id
  );

  const handleApply = async () => {
    if (!user || !user.email) {
      Swal.fire({
        title: "Please login to apply for the job",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: currentLocation } });
        }
      });
      return;
    }

    if (alreadyApplied) {
      Swal.fire({
        title: "Already Applied",
        text: "You have already applied for this job.",
        icon: "info",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }

    const applyJob = {
      jobId: job._id,
      image: job.image,
      title: job.title,
      remote_or_onsite: job.remote_or_onsite,
      location: job.location,
      jobtype: job.jobtype,
      salary: job.salary,
      name: user.displayName,
      email: user.email,
    };

    try {
      const res = await fetch("http://localhost:5000/applied-jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applyJob),
      });

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Job application submitted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/applied-jobs");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to submit the application.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong. Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="my-14">
      <div className="block sm:flex items-center justify-between w-[90%] mx-auto">
        <div className="flex-[0.7]">
          <JobCard job={job} />
        </div>
        <div>
          <button
            onClick={handleApply}
            disabled={alreadyApplied}
            className={`px-10 rounded-lg py-3 ${
              alreadyApplied
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } font-semibold transition-all duration-300`}
          >
            {alreadyApplied ? "Already Applied" : "Apply"}
          </button>
        </div>
      </div>
      <div className="mt-12 w-[90%] mx-auto">
        <h1 className="text-xl font-semibold">Job Description</h1>
        <p className="mt-4 text-black text-opacity-70">{job.job_description}</p>
        <h1 className="text-xl font-semibold mt-6">Key Responsibilities</h1>
        <p className="mt-4 text-black text-opacity-70">
          {job.job_responsibility}
        </p>
        <h1 className="text-xl font-semibold mt-6">Educational Requirements</h1>
        <p className="mt-4 text-black text-opacity-70">
          {job.educational_requirements}
        </p>
        <h1 className="text-xl font-semibold mt-6">Experiences</h1>
        <p className="mt-4 text-black text-opacity-70">{job.experiences}</p>
      </div>
    </div>
  );
};

export default JobDetails;
