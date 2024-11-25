import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Contact } from "@/types";
import Button from "../Button";
import "./Contact.css";
import Heading from "../Heading";

const ContactUs: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Contact>();
  const [phoneNumber, setPhoneNumber] = useState("+880");

  const onSubmit = async (data: Contact) => {
    const countryCode = phoneNumber.slice(0, phoneNumber.length - 10);
    const phone = phoneNumber.slice(-10);
    const newContact = {
      name: data.name,
      email: data.email,
      phone,
      countryCode,
      message: data.message,
    };
    try {
      const res = await fetch(
        "https://job-portal-server-side-tau.vercel.app/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContact),
        }
      );

      const resData = await res.json();
      if (resData.insertedId) {
        reset();
        setPhoneNumber("+880");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Contact added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };

  return (
    <div className="pb-14">
      <Heading
        mainHeading="Contact Us"
        subHeading="Need updated job news, stay connected with us"
      />
      <div className="mt-9 mx-3 md:mx-12 xl:mx-20 py-16 contact">
        <div className="w-full flex-shrink-0 sm:max-w-xl mx-auto px-2 sm:p-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-lg border-opacity-10 border-2 border-gray-500"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                  {...register("name", { required: true, maxLength: 90 })}
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                  {...register("email", { required: true, maxLength: 90 })}
                />
              </div>
            </div>
            <div>
              <PhoneInput
                country="bd"
                value={phoneNumber}
                onChange={setPhoneNumber}
                inputProps={{
                  className:
                    "border text-black border-gray-300 rounded-lg w-full ps-12 py-3 outline-none",
                }}
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                className="border h-24 text-black border-gray-300 outline-none rounded-lg w-full p-3"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div className="flex justify-center mt-2">
              <Button name={"Submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
