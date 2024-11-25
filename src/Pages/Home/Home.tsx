import ContactUs from "@/components/Contact/Contact";
import FeaturedJobs from "@/components/FeaturedJobs";
import Hero from "@/components/Hero";
import JobCategory from "@/components/JobCategory";
import Search from "@/components/Search";
import Testimonials from "@/components/Testimonials";
import { useTheme } from "@/components/theme-provider";
import TrustedCompanies from "@/components/TrustedCompanies";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <Helmet>
        <title>Quick Hire | Home</title>
      </Helmet>
      <div
        className={`transition-colors ${
          theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-black"
        }`}
      >
        <Hero />
        <Search />
        <JobCategory />
        <FeaturedJobs />
        <TrustedCompanies />
        <Testimonials />
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
