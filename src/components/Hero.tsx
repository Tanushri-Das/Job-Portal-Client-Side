import heroImg from "@/assets/hero.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "./theme-provider";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in ms
      offset: 100, // Distance to trigger animation
      easing: "ease-in-out",
    });
  }, []);
  const { theme } = useTheme();
  return (
    <div className="py-14">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
          {/* content */}
          <div data-aos="fade-right">
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e]leading-[3rem] lg:leading-[4rem] font-extrabold">
              The <span className="text-blue-600">Easiest Way</span> <br /> To
              Get Your New Job
            </h1>
            <p
              className={`text-[16px] md:text-[18px] mt-4 ${
                theme === "dark" ? "text-gray-200" : "text-[#4f5e64]"
              }`}
            >
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>

            {/* search box */}
            <div className="mt-[1.5rem]">
              <div className="relative flex items-center h-12 rounded-lg border-2 bg-white overflow-hidden w-full sm:w-[75%] md:w-[60%] lg:w-[80%]">
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
                  className="py-4 outline-none"
                />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 cursor-pointer outline-none bg-blue-600 text-[16px] rounded-md font-semibold text-white px-6 py-2">
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:block" data-aos="fade-left">
            <img
              src={heroImg}
              className="lg:w-[700px] lg:h-[400px]"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
