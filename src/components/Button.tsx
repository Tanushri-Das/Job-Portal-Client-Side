import { ButtonProps } from "@/types";

const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <>
      <button
        type="submit"
        onClick={onClick}
        className="px-6 py-2 text-[16px] font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 rounded-md text-white"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
