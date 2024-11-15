import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json(); // Convert response to JSON
    },
  });

  return [categories, refetch];
};

export default useCategories;
