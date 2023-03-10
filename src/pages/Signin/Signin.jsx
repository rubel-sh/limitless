import React, { useContext } from "react";
import axios from "axios";
import { Button, Label } from "flowbite-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../context/TokenProvider.jsx";
import limitlessLogo from "../../assets/logo/limitless.png";

const Signin = () => {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    const password = form.password.value;

    // verify data in server and get JWT token
    axios
      .post(`${import.meta.env.VITE_API}/login`, {
        phone,
        password,
      })
      .then((data) => {
        if (data.data.accessToken) {
          toast.success("Login Success, JWT token saved to localstorage", {
            duration: 4000,
          });
          localStorage.setItem("limitlessToken", data.data.accessToken);
          setToken(localStorage.getItem("limitlessToken"));
          navigate("/dashboard");
          console.log("navigated");
          return;
        }
        localStorage.setItem("limitlessToken", "");
        toast.error("Login Failed, Please try again");
      })
      .catch((err) => {
        console.log(err);
        localStorage.setItem("limitlessToken", "");
        toast.error("Login Failed, Please try again");
      });
  };
  return (
    <div className="container mx-auto my-10 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-4xl mx-auto  border-slate-300 border overflow-hidden rounded-lg">
        {/* Left Image */}
        <div className="w-full h-full relative">
          <div className="absolute w-full h-full bg-white/50  flex justify-center items-center flex-col">
            <img src={limitlessLogo} className="w-2/5 mx-auto" alt="" />
            <h1 className="text-5xl font-extrabold text-white text-center">
              Login
            </h1>
          </div>
          <img
            src="https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=" mx-auto order-2 md:order-1 object-cover w-full h-full z-10"
          />
        </div>
        {/* Right Form */}
        <div className="mb-10 md:mb-0 order-1 md:order-2 ">
          <form
            onSubmit={handleLogin}
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

            {/* Login Btn */}
            <Button
              type="submit"
              className="w-[210px] bg-woodDark hover:bg-woodLight text-white mt-5"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
