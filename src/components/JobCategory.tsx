import { useEffect, useState } from "react";
import Heading from "./Heading";
import JobCategoryCard from "./JobCategoryCard";
import { Category } from "@/types";

const JobCategory = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="pb-14">
      <Heading
        mainHeading="Popular Job Categories"
        subHeading="Explore thousands of job opportunities with all the information you need. It's your future"
      />
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-9 gap-12 items-center">
        {categories?.map((category) => (
          <JobCategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
