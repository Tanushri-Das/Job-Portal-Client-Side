import FeaturedJobs from "@/components/FeaturedJobs";
import Hero from "@/components/Hero";
import JobCategory from "@/components/JobCategory";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory/>
      <FeaturedJobs/>
    </div>
  );
};

export default Home;
