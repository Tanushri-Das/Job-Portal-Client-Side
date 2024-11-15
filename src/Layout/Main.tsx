import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
      <ScrollToTop/>
    </div>
  );
};

export default Main;
