// import useJobs from "@/Hooks/useJobs";
// import Heading from "./Heading";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// const Search = () => {
//   const [jobs] = useJobs();
//   return (
//     <div className="pb-14">
//       <Heading
//         mainHeading="Your ideal job awaits ,start the search"
//         subHeading="Get latest job openings that best suits you"
//       />
//       <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-9 gap-8 items-center">
//         <Select>
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Job Role" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="frontend">Frontend Developer</SelectItem>
//             <SelectItem value="backend">Backend Developer</SelectItem>
//             <SelectItem value="full stack">Full Stack Developer</SelectItem>
//             <SelectItem value="android">Android Developer</SelectItem>
//           </SelectContent>
//         </Select>
//         <Select>
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Job Type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="full">Full Time</SelectItem>
//             <SelectItem value="part">Part Time</SelectItem>
//             <SelectItem value="contract">Contract</SelectItem>
//             <SelectItem value="project">Project Based</SelectItem>
//           </SelectContent>
//         </Select>
//         <Select>
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Location" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="full">Onsite</SelectItem>
//             <SelectItem value="part">Remote</SelectItem>
//             <SelectItem value="contract">Hybrid</SelectItem>
//           </SelectContent>
//         </Select>
//         <Select>
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="fresher">Fresher</SelectItem>
//             <SelectItem value="entry">Entry Level</SelectItem>
//             <SelectItem value="mid">Mid Level</SelectItem>
//             <SelectItem value="senior">Senior Level</SelectItem>
//           </SelectContent>
//         </Select>
//         <div>
//           <button className="w-full px-6 rounded-lg py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

// wihtout clear filter button
// import { useState } from "react";
// import useJobs from "@/Hooks/useJobs";
// import Heading from "./Heading";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Job } from "@/types";
// import JobCard from "./JobCard";

// type FilterField = "role" | "type" | "location" | "experience";

// const Search = () => {
//   const [jobs] = useJobs(); // Fetch jobs using custom hook
//   const [filters, setFilters] = useState<{
//     role: string;
//     type: string;
//     location: string;
//     experience: string;
//   }>({
//     role: "",
//     type: "",
//     location: "",
//     experience: "",
//   });

//   const [showResults, setShowResults] = useState(false); // State to control job results visibility

//   const handleFilterChange = (field: FilterField, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
//   };

//   const filteredJobs = jobs.filter((job: Job) => {
//     const matchesRole = filters.role
//       ? job.role.toLowerCase() === filters.role.toLowerCase()
//       : true;
//     const matchesType = filters.type
//       ? job.job_type.toLowerCase() === filters.type.toLowerCase()
//       : true;
//     const matchesLocation = filters.location
//       ? job.location.toLowerCase() === filters.location.toLowerCase()
//       : true;
//     const matchesExperience = filters.experience
//       ? job.experience.toLowerCase() === filters.experience.toLowerCase()
//       : true;

//     console.log(
//       `Matching job ${job.role}:`,
//       matchesRole,
//       matchesType,
//       matchesLocation,
//       matchesExperience
//     );

//     return matchesRole && matchesType && matchesLocation && matchesExperience;
//   });

//   console.log("Filtered Jobs: ", filteredJobs);

//   const handleSearch = () => {
//     setShowResults(true);
//   };

//   return (
//     <div className="pb-14">
//       {/* Heading Section */}
//       <Heading
//         mainHeading="Your ideal job awaits, start the search"
//         subHeading="Get the latest job openings that best suit you"
//       />

//       {/* Filter Section */}
//       <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-9 gap-8 items-center">
//         {/* Role Filter */}
//         <Select onValueChange={(value) => handleFilterChange("role", value)}>
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Job Role" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Frontend Developer">
//               Frontend Developer
//             </SelectItem>
//             <SelectItem value="Backend Developer">Backend Developer</SelectItem>
//             <SelectItem value="Full Stack Developer">
//               Full Stack Developer
//             </SelectItem>
//             <SelectItem value="Android Developer">Android Developer</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Type Filter */}
//         <Select onValueChange={(value) => handleFilterChange("type", value)}>
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Job Type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Full Time">Full Time</SelectItem>
//             <SelectItem value="Part Time">Part Time</SelectItem>
//             <SelectItem value="Contract">Contract</SelectItem>
//             <SelectItem value="Project Based">Project Based</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Location Filter */}
//         <Select
//           onValueChange={(value) => handleFilterChange("location", value)}
//         >
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Location" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Onsite">Onsite</SelectItem>
//             <SelectItem value="Remote">Remote</SelectItem>
//             <SelectItem value="Hybrid">Hybrid</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Experience Filter */}
//         <Select
//           onValueChange={(value) => handleFilterChange("experience", value)}
//         >
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Fresher">Fresher</SelectItem>
//             <SelectItem value="Entry Level">Entry Level</SelectItem>
//             <SelectItem value="Mid Level">Mid Level</SelectItem>
//             <SelectItem value="Senior Level">Senior Level</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Search Button */}
//         <div>
//           <button
//             onClick={handleSearch}
//             className="w-full px-6 rounded-lg py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Job Listings Section */}
//       {showResults && (
//         <div className="w-[90%] mx-auto mt-10">
//           {filteredJobs.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {filteredJobs.map((job: Job) => (
//                 <JobCard job={job} />
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600 mt-10">
//               No jobs found. Please adjust your filters.
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

// import { useState } from "react";
// import useJobs from "@/Hooks/useJobs";
// import Heading from "./Heading";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Job } from "@/types";
// import JobCard from "./JobCard";

// type FilterField = "role" | "type" | "location" | "experience";

// const Search = () => {
//   const [jobs] = useJobs(); // Fetch jobs using custom hook
//   const [filters, setFilters] = useState<{
//     role: string;
//     type: string;
//     location: string;
//     experience: string;
//   }>({
//     role: "",
//     type: "",
//     location: "",
//     experience: "",
//   });

//   const [showResults, setShowResults] = useState(false); // State to control job results visibility

//   const handleFilterChange = (field: FilterField, value: string) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
//   };

//   const filteredJobs = jobs.filter((job: Job) => {
//     const matchesRole = filters.role
//       ? job.role.toLowerCase() === filters.role.toLowerCase()
//       : true;
//     const matchesType = filters.type
//       ? job.job_type.toLowerCase() === filters.type.toLowerCase()
//       : true;
//     const matchesLocation = filters.location
//       ? job.location.toLowerCase() === filters.location.toLowerCase()
//       : true;
//     const matchesExperience = filters.experience
//       ? job.experience.toLowerCase() === filters.experience.toLowerCase()
//       : true;

//     return matchesRole && matchesType && matchesLocation && matchesExperience;
//   });

//   const handleSearch = () => {
//     setShowResults(true);
//   };

//   const handleClearFilters = () => {
//     setFilters({
//       role: "",
//       type: "",
//       location: "",
//       experience: "",
//     });
//     setShowResults(false); // Hide the job listings when clearing filters
//   };

//   return (
//     <div className="pb-14">
//       {/* Heading Section */}
//       <Heading
//         mainHeading="Your ideal job awaits, start the search"
//         subHeading="Get the latest job openings that best suit you"
//       />

//       {/* Filter Section */}
//       <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-9 gap-8 items-center">
//         {/* Role Filter */}
//         <Select
//           value={filters.role}
//           onValueChange={(value) => handleFilterChange("role", value)}
//         >
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Job Role" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Frontend Developer">
//               Frontend Developer
//             </SelectItem>
//             <SelectItem value="Backend Developer">Backend Developer</SelectItem>
//             <SelectItem value="Full Stack Developer">
//               Full Stack Developer
//             </SelectItem>
//             <SelectItem value="Android Developer">Android Developer</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Type Filter */}
//         <Select
//           value={filters.type}
//           onValueChange={(value) => handleFilterChange("type", value)}
//         >
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Job Type" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Full Time">Full Time</SelectItem>
//             <SelectItem value="Part Time">Part Time</SelectItem>
//             <SelectItem value="Contract">Contract</SelectItem>
//             <SelectItem value="Project Based">Project Based</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Location Filter */}
//         <Select
//           value={filters.location}
//           onValueChange={(value) => handleFilterChange("location", value)}
//         >
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Location" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Onsite">Onsite</SelectItem>
//             <SelectItem value="Remote">Remote</SelectItem>
//             <SelectItem value="Hybrid">Hybrid</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Experience Filter */}
//         <Select
//           value={filters.experience}
//           onValueChange={(value) => handleFilterChange("experience", value)}
//         >
//           <SelectTrigger className="font-semibold">
//             <SelectValue placeholder="Experience" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Fresher">Fresher</SelectItem>
//             <SelectItem value="Entry Level">Entry Level</SelectItem>
//             <SelectItem value="Mid Level">Mid Level</SelectItem>
//             <SelectItem value="Senior Level">Senior Level</SelectItem>
//           </SelectContent>
//         </Select>

//         {/* Search Button */}
//         <div>
//           <button
//             onClick={handleSearch}
//             className="w-full px-6 rounded-lg py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white"
//           >
//             Search
//           </button>
//         </div>
//       </div>
//       {/* Job Listings Section */}
//       {showResults && (
//         <>
//           <div className="w-[90%] mx-auto mt-10">
//             <div className="flex justify-center my-6">
//               <button
//                 onClick={handleClearFilters}
//                 className="px-6 rounded-lg py-2 font-semibold bg-red-600 hover:bg-red-800 transition-all duration-300 text-white"
//               >
//                 Clear Filters
//               </button>
//             </div>
//             <>
//               {filteredJobs.length > 0 ? (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {filteredJobs.map((job: Job) => (
//                     <JobCard key={job._id} job={job} />
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-center text-gray-600 mt-10">
//                   No jobs found. Please adjust your filters.
//                 </p>
//               )}
//             </>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Search;

import { useState } from "react";
import useJobs from "@/Hooks/useJobs";
import Heading from "./Heading";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Job, SearchJob } from "@/types";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type FilterField = "role" | "type" | "location" | "experience";

const Search = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Distance to trigger animation
      easing: "ease-in-out",
    });
  }, []);
  const [jobs] = useJobs(); // Fetch jobs using custom hook
  const [filters, setFilters] = useState<SearchJob>({
    role: "",
    type: "",
    location: "",
    experience: "",
  });

  const [showResults, setShowResults] = useState(false); // State to control job results visibility

  const handleFilterChange = (field: FilterField, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredJobs = jobs.filter((job: Job) => {
    const matchesRole = filters.role
      ? job.role.toLowerCase() === filters.role.toLowerCase()
      : true;
    const matchesType = filters.type
      ? job.job_type.toLowerCase() === filters.type.toLowerCase()
      : true;
    const matchesLocation = filters.location
      ? job.location.toLowerCase() === filters.location.toLowerCase()
      : true;
    const matchesExperience = filters.experience
      ? job.experience.toLowerCase() === filters.experience.toLowerCase()
      : true;

    return matchesRole && matchesType && matchesLocation && matchesExperience;
  });

  const handleSearch = () => {
    setShowResults(true);
  };

  const handleClearFilters = () => {
    setFilters({
      role: "",
      type: "",
      location: "",
      experience: "",
    });
    setShowResults(false); // Hide the job listings when clearing filters
  };

  return (
    <div className="pb-14">
      {/* Heading Section */}
      <Heading
        mainHeading="Your ideal job awaits, start the search"
        subHeading="Get the latest job openings that best suit you"
      />

      {/* Filter Section */}
      <div
        data-aos="zoom-in"
        className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-9 gap-8 items-center"
      >
        {/* Role Filter */}
        <Select
          value={filters.role}
          onValueChange={(value) => handleFilterChange("role", value)}
        >
          <SelectTrigger className="font-semibold">
            <SelectValue placeholder="Job Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Frontend Developer">
              Frontend Developer
            </SelectItem>
            <SelectItem value="Backend Developer">Backend Developer</SelectItem>
            <SelectItem value="Full Stack Developer">
              Full Stack Developer
            </SelectItem>
            <SelectItem value="Android Developer">Android Developer</SelectItem>
          </SelectContent>
        </Select>

        {/* Type Filter */}
        <Select
          value={filters.type}
          onValueChange={(value) => handleFilterChange("type", value)}
        >
          <SelectTrigger className="font-semibold">
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Full Time">Full Time</SelectItem>
            <SelectItem value="Part Time">Part Time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="Project Based">Project Based</SelectItem>
          </SelectContent>
        </Select>

        {/* Location Filter */}
        <Select
          value={filters.location}
          onValueChange={(value) => handleFilterChange("location", value)}
        >
          <SelectTrigger className="font-semibold">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Onsite">Onsite</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>

        {/* Experience Filter */}
        <Select
          value={filters.experience}
          onValueChange={(value) => handleFilterChange("experience", value)}
        >
          <SelectTrigger className="font-semibold">
            <SelectValue placeholder="Experience" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fresher">Fresher</SelectItem>
            <SelectItem value="Entry Level">Entry Level</SelectItem>
            <SelectItem value="Mid Level">Mid Level</SelectItem>
            <SelectItem value="Senior Level">Senior Level</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <div>
          <button
            onClick={handleSearch}
            className="w-full px-6 rounded-lg py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white"
          >
            Search
          </button>
        </div>
      </div>
      {/* Job Listings Section */}
      {showResults && (
        <>
          <div className="w-[90%] mx-auto mt-10">
            <div className="flex justify-center my-6">
              <button
                onClick={handleClearFilters}
                className="px-6 rounded-lg py-2 font-semibold bg-red-600 hover:bg-red-800 transition-all duration-300 text-white"
              >
                Clear Filters
              </button>
            </div>
            <>
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredJobs.map((job: Job) => (
                    <Link to={`/jobdetails/${job._id}`} key={job._id}>
                      <JobCard job={job} />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600 mt-10">
                  No jobs found. Please adjust your filters.
                </p>
              )}
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
