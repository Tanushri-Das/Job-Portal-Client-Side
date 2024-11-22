import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useGetUsers = () => {
  const { user, loading } = useAuth();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users?email=${user?.email}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      return res.json(); // JSON ডাটা রিটার্ন করুন
    },
  });

  return [users, refetch];
};

export default useGetUsers;

// useAxiosSecure
