import heroImg from "@/assets/images/hero.svg";

const Hero = () => {
  return (
    <div className="py-14">
      <div className="w-[100%] h-[60vh] flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
          {/* content */}
          <div>
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e]leading-[3rem] lg:leading-[4rem] font-extrabold">
              The <span className="text-blue-500">Easiest Way</span> <br /> To
              Get Your New Job
            </h1>
            <p className="text-[#4f5e64] text-[16px] md:text-text-[18px] mt-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            {/* search box */}
            <div className="mt-[1.5rem]">
              <div className="relative flex items-center w-full h-12 rounded-lg border-2 bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search Job ..."
                  className="w-[60%] md:w-[70%] lg:w-[75%] py-4 outline-none"
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer outline-none bg-blue-600 text-[16px] rounded-md font-semibold text-white px-6 py-2">
                 Search
                </button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <img src={heroImg} className="w-[700px] h-[400px]" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
