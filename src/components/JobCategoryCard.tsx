import { Category } from "@/types";

const JobCategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="p-4 border-2 cursor-pointer hover:scale-110 hover:shadow-sm transition-all duration-300 border-gray-500 rounded-lg border-opacity-10">
      <div className="flex items-center space-x-4">
        {/* image */}
        <img
          src={category.image}
          alt="category-img"
          className="w-[60px] h-[60px]"
        />
        {/* content */}
        <div>
          <h1 className="text-lg font-semibold mb-3">{category.category}</h1>
          <p className="text-[16px] text-black font-semibold text-opacity-50">
            {category.openPosition} Jobs Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryCard;
