import JobCard from "@/components/JobCard";
import { useTheme } from "@/components/theme-provider";
import useAppliedJobs from "@/Hooks/useAppliedJobs";
import useAuth from "@/Hooks/useAuth";
import { AppliedJobs, Job } from "@/types";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BiMoney } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const job = useLoaderData() as Job;
  const { user } = useAuth();
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const [appliedJobs, refetch] = useAppliedJobs();
  const { theme } = useTheme();

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
      role: job.role,
      location: job.location,
      job_type: job.job_type,
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
        refetch();
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
    <>
      <Helmet>
        <title>Quick Hire | Job Details</title>
      </Helmet>
      <div className="my-14">
        <div className="w-[90%] mx-auto">
          <div className="p-4 relative border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between sm:space-y-4 sm:space-x-3 md:space-x-6">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div>
                  <img
                    src={job.image}
                    alt={job.role}
                    className="w-[90px] sm:w-[100px] h-[90px] sm:h-[100px]"
                  />
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
                            : "text-black text-opacity-50"
                        }`}
                      >
                        {job.location}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BiMoney className="w-[0.8rem] h-[0.8rem] text-pink-700" />
                      <p
                        className={`text-[16px] font-semibold ${
                          theme === "dark"
                            ? "text-gray-200"
                            : "text-black text-opacity-50"
                        }`}
                      >
                        {job.salary}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-4 mt-4">
                    <div
                      className={`text-[16px] px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-green-400 ${
                        theme === "dark"
                          ? "text-gray-200"
                          : "text-black text-opacity-80"
                      }`}
                    >
                      {job.location}
                    </div>
                    <div
                      className={`text-[16px] px-3 sm:px-6 py-1 rounded-full bg-opacity-30 font-semibold capitalize bg-red-400 ${
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
              <div className="flex justify-center">
                <button
                  onClick={handleApply}
                  disabled={alreadyApplied}
                  className={`px-6 py-2 text-[16px]  rounded-md ${
                    alreadyApplied
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  } font-semibold transition-all duration-300`}
                >
                  {alreadyApplied ? "Already Applied" : "Apply"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 w-[90%] mx-auto">
          <h1 className="text-xl font-semibold">Job Description</h1>
          <p className="mt-4 text-black text-opacity-70">
            {job.job_description}
          </p>
          <h1 className="text-xl font-semibold mt-6">Key Responsibilities</h1>
          <p className="mt-4 text-black text-opacity-70">
            {job.job_responsibility}
          </p>
          <h1 className="text-xl font-semibold mt-6">
            Educational Requirements
          </h1>
          <p className="mt-4 text-black text-opacity-70">
            {job.educational_requirements}
          </p>
          <h1 className="text-xl font-semibold mt-6">Experience</h1>
          <p className="mt-4 text-black text-opacity-70">{job.experience}</p>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
