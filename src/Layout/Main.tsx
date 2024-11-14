import Header from "@/SharedComponents/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="max-w-[1280px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
