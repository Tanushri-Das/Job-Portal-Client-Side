import { useQuery } from "@tanstack/react-query";

const useJobs = () => {
  const { data: jobs = [], refetch } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await fetch("https://job-portal-server-side-tau.vercel.app/jobs");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json(); // Convert response to JSON
    },
  });

  return [jobs, refetch];
};

export default useJobs;
