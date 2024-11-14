import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";

const Header = () => {
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header
      className={`border-b-[1px] transition-colors ${
        theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-black"
      }`}
    >
      <div className="px-10 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-lg font-bold lg:flex-grow-0">
          <Link to="/">
            <div className="flex justify-center items-center">
              {/* <Image alt="logo" src={logo} height={80} width={80} /> */}
              <h1
                className="text-3xl font-bold italic lg:block 
        text-[#151515] tracking-wide dark:text-gray-300 dark:ms-2
        transition-all duration-300 ease-in-out 
        hover:scale-105"
              >
                Car<span className="text-[#FF3811]">Care</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* Center: Navigation (Hidden on small screens) */}
        <nav className="hidden lg:flex lg:inset-0 lg:justify-center lg:items-center">
          <div className="flex items-center gap-x-8 font-semibold text-lg">
            {/* Hardcoded Navigation Links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? `${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`
                    : "text-[#737373]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/applied-jobs"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? `${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`
                    : "text-[#737373]"
                }`
              }
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-lg ${
                  isActive
                    ? `${
                        theme === "dark" ? "text-white" : "text-black"
                      } font-bold`
                    : "text-[#737373]"
                }`
              }
            >
              Login
            </NavLink>
          </div>
        </nav>

        {/* Right: Theme Toggler (Visible on all screens) */}
        <div className="flex-grow flex justify-center lg:flex-grow-0 lg:relative">
          <ModeToggle />
        </div>

        {/* Right: Menu Icon (Visible only on small to medium screens) */}
        <div className="lg:hidden">
          <button onClick={toggleDrawer}>
            <FiMenu className="text-2xl" />
          </button>
        </div>

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-800 transition-transform transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } w-[200px] z-50`}
        >
          {/* Close Icon inside Drawer, positioned to the right */}
          <div className="flex justify-end p-4">
            <button onClick={toggleDrawer}>
              <FaXmark className="text-2xl" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col gap-y-4 p-5 font-semibold text-lg lg:text-[16px]">
            {/* Hardcoded Drawer Links */}
            <NavLink to="/" className="text-lg" onClick={toggleDrawer}>
              Home
            </NavLink>
            <NavLink
              to="/applied-jobs"
              className="text-lg"
              onClick={toggleDrawer}
            >
              Applied Jobs
            </NavLink>
          </nav>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
