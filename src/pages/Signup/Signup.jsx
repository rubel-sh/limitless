import React, { useState } from "react";
import axios from "axios";
import { Button, Label } from "flowbite-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const password = form.password.value;

    // send data to db
    setIsRegistering(true);
    axios
      .put(`${import.meta.env.VITE_API}/register`, {
        phone,
        password,
      })
      .then((data) => {
        if (data.data.acknowledged) {
          setIsRegistering(false);
          navigate("/signin");
          return toast.success(
            "Account created successfully, Please login now"
          );
        }
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="container mx-auto my-10 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto  border-slate-300 border overflow-hidden rounded-lg">
        {/* Left Image */}
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-white/50  flex justify-center items-center flex-col">
            <img
              src="http://localhost:5173/"
              className="w-2/3 mx-auto"
              alt=""
            />
            <h1 className="text-5xl font-extrabold text-white text-center">
              Register
            </h1>
          </div>
          <img
            src="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" mx-auto order-2 md:order-1 object-cover w-full h-full z-10"
          />
        </div>
        {/* Right Form */}
        <div className="mb-10 md:mb-0 order-1 md:order-2 ">
          <form
            onSubmit={handleRegistration}
            className="flex flex-col gap-4 max-w-[500px] p-14  mx-auto rounded-md"
          >
            {/* Enter Phone number */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your Phone Numner" />
              </div>
              <input
                id="phone"
                type="number"
                name="phone"
                placeholder="01XXXXXXXXX"
                required={true}
              />
            </div>
            {/* Enter Password */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                required={true}
              />
            </div>

            <Button
              type="submit"
              disabled={isRegistering}
              className="w-[210px] bg-woodDark hover:bg-woodLight text-white mt-5"
            >
              {isRegistering ? "Registering..." : "SignUp"}
            </Button>
            <Link to="/signin">Already Signed In ?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
