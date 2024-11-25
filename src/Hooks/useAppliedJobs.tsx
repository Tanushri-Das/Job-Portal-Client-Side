import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAppliedJobs = () => {
  const { user, loading } = useAuth();

  const { data: appliedJobs = [], refetch } = useQuery({
    queryKey: ["appliedJobs", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await fetch(`https://job-portal-server-side-tau.vercel.app/applied-jobs?email=${user?.email}`);
      if (!res.ok) {
        throw new Error("Failed to fetch applied jobs");
      }
      return res.json(); // JSON ডাটা রিটার্ন করুন
    },
  });

  return [appliedJobs, refetch];
};

export default useAppliedJobs;

// useAxiosSecure