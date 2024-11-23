import FeaturedJobs from "@/components/FeaturedJobs";
import Hero from "@/components/Hero";
import JobCategory from "@/components/JobCategory";
import Search from "@/components/Search";

const Home = () => {
  return (
    <div>
      <Hero />
      <Search/>
      <JobCategory/>
      <FeaturedJobs/>
    </div>
  );
};

export default Home;
