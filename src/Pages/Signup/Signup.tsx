// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

// interface FormData {
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   image: File[];
// }

// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm<FormData>();
//   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
//   console.log("img_hosting_url", img_hosting_url);

//   const [phoneNumber, setPhoneNumber] = useState("+880");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () =>
//     setShowConfirmPassword(!showConfirmPassword);

//   const onSubmit = async (data: FormData) => {
//     try {
//       const formData = new FormData();
//       formData.append("image", data.image[0]);

//       // Uploading image to imgbb
//       const response = await fetch(img_hosting_url, {
//         method: "POST",
//         body: formData,
//       });
//       const imgResponse = await response.json();

//       if (imgResponse.success) {
//         const imgURL = imgResponse.data.display_url;
//         const countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
//         const phone = phoneNumber.slice(-10);

//         // Consolidating data for logging
//         const submittedData = {
//           ...data,
//           phoneNumber: `+${countryCode}${phone}`,
//           imageUrl: imgURL,
//         };

//         console.log("Form Data:", submittedData);
//         reset();
//       } else {
//         console.error("Image upload failed:", imgResponse.error.message);
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     }
//   };

//   return (
//     <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
//       <div className="w-full flex-shrink-0 sm:max-w-2xl bg-base-100 mx-auto">
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           className="space-y-4 bg-white p-6 rounded-md shadow-lg"
//         >
//           <h1 className="text-black text-center text-4xl mb-6 font-bold">
//             Sign Up
//           </h1>
//           {/* First and Last Name */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block text-black text-lg font-semibold mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 {...register("firstname", {
//                   required: "First Name is required",
//                 })}
//                 className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
//               />
//               {errors.firstname && (
//                 <span className="text-red-600 mt-1">
//                   {errors.firstname.message}
//                 </span>
//               )}
//             </div>
//             <div className="flex-1">
//               <label className="block text-black text-lg font-semibold mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 {...register("lastname", { required: "Last Name is required" })}
//                 className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
//               />
//               {errors.lastname && (
//                 <span className="text-red-600 mt-1">
//                   {errors.lastname.message}
//                 </span>
//               )}
//             </div>
//           </div>
//           {/* Email and Phone Number */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block text-black text-lg font-semibold mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 {...register("email", {
//                   required: "Email Address is required",
//                   pattern: {
//                     value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                     message: "Please enter a valid email address",
//                   },
//                 })}
//                 className="border text-black border-gray-300 rounded-md w-full p-3 outline-none"
//               />
//               {errors.email && (
//                 <span className="text-red-600 mt-1">
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>
//             <div className="flex-1">
//               <label className="block text-black text-lg font-semibold mb-1">
//                 Phone Number
//               </label>
//               <PhoneInput
//                 country="bd"
//                 value={phoneNumber}
//                 onChange={setPhoneNumber}
//                 inputProps={{
//                   className:
//                     "border text-black border-gray-300 rounded-md w-full ps-12 py-3 outline-none",
//                 }}
//               />
//             </div>
//           </div>
//           {/* Image Upload */}
//           <div>
//             <label className="block text-black text-lg font-semibold mb-1">
//               Photo Upload
//             </label>
//             <input
//               type="file"
//               {...register("image", { required: "Image is required" })}
//               className="border text-black border-gray-300 rounded-md w-full p-3 outline-none"
//             />
//             {errors.image && (
//               <span className="text-red-600 mt-1">{errors.image.message}</span>
//             )}
//           </div>
//           {/* Password and Confirm Password */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <label className="block text-black text-lg font-semibold mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: {
//                       value: 6,
//                       message: "Password must be at least 6 characters",
//                     },
//                   })}
//                   className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
//                 />
//                 <span
//                   className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//               {errors.password && (
//                 <span className="text-red-600 mt-1">
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>
//             <div className="flex-1">
//               <label className="block text-black text-lg font-semibold mb-1">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showConfirmPassword ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   {...register("confirmPassword", {
//                     required: "Confirm Password is required",
//                     validate: (value) =>
//                       value === watch("password") || "Passwords do not match",
//                   })}
//                   className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
//                 />
//                 <span
//                   className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
//                   onClick={toggleConfirmPasswordVisibility}
//                 >
//                   {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                 </span>
//               </div>
//               {errors.confirmPassword && (
//                 <span className="text-red-600 mt-1">
//                   {errors.confirmPassword.message}
//                 </span>
//               )}
//             </div>
//           </div>
//           {/* Submit Button */}
//           <div className="flex justify-center">
//             <button className="px-10 rounded-lg py-3 bg-blue-600 text-white font-semibold transition-all duration-300">
//               Sign Up
//             </button>
//           </div>
//           <p className="text-center text-black text-[16px] font-medium mt-2">
//             Already have an account ?
//             <Link to="/login" className="ms-1">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form } from "@/types";
import SocialLogin from "@/components/SocialLogin";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<Form>();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const [phoneNumber, setPhoneNumber] = useState("+880");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const onSubmit = async (data: Omit<Form, "imageUrl">) => {
    try {
      const fileInput = document.querySelector<HTMLInputElement>("#imageInput");
      const file = fileInput?.files?.[0];
      if (!file) {
        console.error("No file selected");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      // Uploading image to imgbb
      const response = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });
      const imgResponse = await response.json();

      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        const countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
        const phone = phoneNumber.slice(-10);

        // Consolidating data for logging
        const submittedData = {
          ...data,
          phoneNumber: `+${countryCode}${phone}`,
          imageUrl: imgURL,
        };

        console.log("Form Data:", submittedData);
        reset();
      } else {
        console.error("Image upload failed:", imgResponse.error.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
      <div className="w-full flex-shrink-0 sm:max-w-2xl bg-base-100 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white p-6 rounded-md shadow-lg"
        >
          <h1 className="text-black text-center text-4xl mb-6 font-bold">
            Sign Up
          </h1>
          {/* First and Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-black text-lg font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                {...register("firstname", {
                  required: "First Name is required",
                })}
                className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
              />
              {errors.firstname && (
                <span className="text-red-600 mt-1">
                  {errors.firstname.message}
                </span>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-black text-lg font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastname", { required: "Last Name is required" })}
                className="border text-black border-gray-300 rounded-md w-full px-3 py-2 outline-none"
              />
              {errors.lastname && (
                <span className="text-red-600 mt-1">
                  {errors.lastname.message}
                </span>
              )}
            </div>
          </div>
          {/* Email and Phone Number */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
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
                className="border text-black border-gray-300 rounded-md w-full p-3 outline-none"
              />
              {errors.email && (
                <span className="text-red-600 mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-black text-lg font-semibold mb-1">
                Phone Number
              </label>
              <PhoneInput
                country="bd"
                value={phoneNumber}
                onChange={setPhoneNumber}
                inputProps={{
                  className:
                    "border text-black border-gray-300 rounded-md w-full ps-12 py-3 outline-none",
                }}
              />
            </div>
          </div>
          {/* Image Upload */}
          <div>
            <label className="block text-black text-lg font-semibold mb-1">
              Photo Upload
            </label>
            <input
              type="file"
              id="imageInput"
              className="border text-black border-gray-300 rounded-md w-full p-3 outline-none"
            />
          </div>
          {/* Password and Confirm Password */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
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
            <div className="flex-1">
              <label className="block text-black text-lg font-semibold mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                />
                <span
                  className="absolute text-black right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-600 mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="px-10 rounded-lg py-3 bg-blue-600 text-white font-semibold transition-all duration-300">
              Sign Up
            </button>
          </div>
          <p className="text-center text-black text-[16px] font-medium mt-2">
            Already have an account ?
            <Link to="/login" className="ms-1">
              Login
            </Link>
          </p>
          <p className="text-center text-lg font-bold my-4 text-black">Or</p>
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Signup;
