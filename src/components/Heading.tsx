interface Props {
  mainHeading: string;
  subHeading: string;
}
const Heading = ({ mainHeading, subHeading }: Props) => {
  return (
    <div className="text-center p-3">
      <h1 className="text-black text-4xl text-opacity-90 font-bold">{mainHeading}</h1>
      <p className="mt-4 text-[#4f5e64] text-[16px] text-opacity-80 font-medium">{subHeading}</p>
    </div>
  );
};

export default Heading;
