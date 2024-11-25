import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import useAuth from "@/Hooks/useAuth";
import useGetUsers from "@/Hooks/useGetUsers";
import Button from "./Button";

const Header = () => {
  const { user, logOut } = useAuth();
  const [users] = useGetUsers();
  const { theme } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <header
      className={`border-b-[1px] transition-colors ${
        theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white text-black"
      }`}
    >
      <div className="w-[90%] mx-auto py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-lg font-bold lg:flex-grow-0">
          <Link to="/">
            <div className="flex justify-center items-center">
              <h1 className="text-3xl font-bold text-blue-600">Quick Hire</h1>
            </div>
          </Link>
        </div>

        {/* Center: Navigation (Hidden on small screens) */}
        <nav className="hidden lg:flex lg:inset-0 lg:justify-center lg:items-center">
          <div className="flex items-center gap-x-8 font-semibold text-lg">
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
              to="/alljobs"
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
              All Jobs
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

            {/* Display User Image if Logged In */}
            {user && users && (
              <div className="flex items-center gap-x-8">
                <img
                  src={user.photoURL || users.imageUrl} // Ensure you are using the correct image URL
                  alt="User Profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            )}

            {user ? (
              <Button name={"Logout"} onClick={handleLogout} />
            ) : (
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
            )}
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
          } w-2/4 sm:w-2/5 z-50 lg:hidden`}
        >
          <div className="flex justify-end p-4">
            <button onClick={toggleDrawer}>
              <FaXmark className="text-2xl" />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="flex flex-col gap-y-4 p-5 font-semibold text-lg lg:text-[16px]">
            <NavLink
              to="/"
              onClick={toggleDrawer}
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
              to="/alljobs"
              onClick={toggleDrawer}
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
              All Jobs
            </NavLink>
            <NavLink
              to="/applied-jobs"
              onClick={toggleDrawer}
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

            {/* Display User Image if Logged In */}
            {user && users && (
              <div className="flex items-center gap-x-8">
                <img
                  src={user.photoURL || users.imageUrl} // Ensure you are using the correct image URL
                  alt="User Profile"
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="w-[90%] sm:w-1/2 px-6 py-2 font-semibold bg-blue-700 hover:bg-blue-900 transition-all duration-300 rounded-md text-white"
              >
                Logout
              </button>
            ) : (
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
            )}
          </nav>
        </div>

        {/* Overlay */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleDrawer}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
