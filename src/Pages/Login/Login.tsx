import { Form } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "@/components/SocialLogin";
import useAuth from "@/Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Form>();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { login } = useAuth();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data: Form) => {
    const { email, password } = data; // Get email and password from form data

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          title: "Good job!",
          text: "You logged in successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Login error:", error);
        Swal.fire({
          title: "Error!",
          text: "Login failed. Please try again.",
          icon: "error",
          showConfirmButton: true,
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Quick Hire | Login</title>
      </Helmet>
      <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
        <div className="w-full flex-shrink-0 sm:max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <h1 className="text-black text-center text-4xl mb-6 font-bold">
              Login
            </h1>
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
              />
              {errors.email && (
                <span className="text-red-600 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div>
              <label className="block text-black text-lg font-semibold mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                />
                <span
                  className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-600 mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex justify-center">
              <button className="px-10 rounded-lg py-3 bg-blue-600 text-white font-semibold transition-all duration-300">
                Login
              </button>
            </div>
            <p className="text-center text-[16px] text-black font-medium mt-2">
              Don’t have an account?
              <Link to="/signup" className="ms-1">
                Signup
              </Link>
            </p>
            <p className="text-center text-lg font-bold my-4 text-black">Or</p>
            <SocialLogin />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
