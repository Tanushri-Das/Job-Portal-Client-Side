import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#1A1919]">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* 1st part of footer */}
        <div data-aos="fade-up">
          <h1 className="text-[24px] text-white mb-4 font-bold uppercase">
            Quick Hire
          </h1>
          <p className="text-[16px] text-white text-opacity-70">
            Empowering your career growth with the best job opportunities.
          </p>
          {/* social icons */}
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
              <Link to="https://www.linkedin.com/in/tanushri-das/">
                <FaFacebookF className="text-white" />
              </Link>
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col">
              <Link to="https://www.linkedin.com/in/tanushri-das/">
                <FaTwitter className="text-white" />
              </Link>
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
              <Link to="https://www.linkedin.com/in/tanushri-das/">
                <FaYoutube className="text-white" />
              </Link>
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col">
              <Link to="https://www.linkedin.com/in/tanushri-das/">
                <FaInstagram className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        {/* 2nd part of footer */}
        <div data-aos="fade-up">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About Us
          </h1>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Policy
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Application
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Candidates
          </p>
        </div>
        {/* 3rd part of footer */}
        <div data-aos="fade-up">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h1>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            job Details
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            How to Apply
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Resume
          </p>
        </div>
        {/* 4th part of footer */}
        <div data-aos="fade-up">
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get In Touch
          </h1>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            +880164647948
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            dastanushri402@gmail.com
          </p>
          <p className="text-[15px] w-fit text-white text-opacity-70 hover:text-yellow-300 cursor-pointer mb-[0.7rem]">
            Dhaka ,Bangladesh
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white text-opacity-70">
          © 2024 job portal website. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
