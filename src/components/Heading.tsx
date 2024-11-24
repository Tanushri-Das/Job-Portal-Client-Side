import { useTheme } from "./theme-provider";

interface Props {
  mainHeading: string;
  subHeading: string;
}
const Heading = ({ mainHeading, subHeading }: Props) => {
  const { theme } = useTheme();
  return (
    <div className="text-center p-3">
      <h1 className="text-4xl text-opacity-90 font-bold">{mainHeading}</h1>
      <p
        className={`text-[16px] text-opacity-80 font-medium mt-4 ${
          theme === "dark" ? "text-gray-200" : "text-[#4f5e64]"
        }`}
      >
        {subHeading}
      </p>
    </div>
  );
};

export default Heading;
