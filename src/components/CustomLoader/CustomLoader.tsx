import React from "react";
import loaderImage from "@/assets/chair.jpg"; 
import './CustomLoader.css';

const CustomLoader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <img
        src={loaderImage}
        alt="Loading..."
        className="zoom-in w-24 h-24"
      />
    </div>
  );
};

export default CustomLoader;
