import { Company } from "@/types";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const TrustedCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("https://job-portal-server-side-tau.vercel.app/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  return (
    <div className="pb-14 w-[90%] mx-auto">
      <h2 className="text-4xl text-center font-bold mb-9">
        Trusted by <span className="text-blue-600">1000+ </span>Companies
      </h2>
      <Marquee pauseOnHover={true}>
        {companies.map((company: Company) => (
          <div key={company._id} className="mx-4 cursor-pointer">
            <img src={company.image} alt="logo" className="w-28 h-28" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TrustedCompanies;
