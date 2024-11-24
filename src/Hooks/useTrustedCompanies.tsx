import { useQuery } from "@tanstack/react-query";

const useTrustedCompanies = () => {
  const { data: companies = [] } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/companies");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  return [companies];
};

export default useTrustedCompanies;
