import { useState } from "react";

interface FilterJobsProps {
  onFilter: (filter: string) => void;
}

const FilterJobs: React.FC<FilterJobsProps> = ({ onFilter }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onFilter(value);
  };

  const handleReset = () => {
    setSelectedValue("");
    onFilter("");
  };

  return (
    <>
      <div className="flex items-center mt-4 sm:mt-0">
        <select
          id="priceRange"
          value={selectedValue}
          onChange={handleSelectChange}
          className="block w-full py-3 px-8 text-[16px] font-semibold border border-gray-300 rounded text-black outline-none"
        >
          <option value="">Filter By</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
        <button
          className="ml-2 2xl:ml-4 px-6 rounded-md py-3 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 text-white"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default FilterJobs;
