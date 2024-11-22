import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterJobsProps {
  onFilter: (filter: string) => void;
}

const FilterJobs: React.FC<FilterJobsProps> = ({ onFilter }) => {
  const handleSelectChange = (value: string) => {
    onFilter(value);
  };

  return (
    <div className="flex items-center mt-4 sm:mt-0">
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-[180px] py-3 text-[16px] font-semibold border border-gray-300 rounded text-black">
          <SelectValue placeholder="Filter By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Remote">Remote</SelectItem>
          <SelectItem value="Onsite">Onsite</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterJobs;
