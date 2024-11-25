import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";
import CustomLoader from "@/components/CustomLoader/CustomLoader";

const Main: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // লোডিং সময় (মিলিসেকেন্ডে)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <CustomLoader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default Main;
