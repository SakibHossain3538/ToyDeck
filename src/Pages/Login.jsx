import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { ToysContext } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm({  }) {
    
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false)
  const { user, setUser, signInwithGoogle, signIn} = useContext(ToysContext)
   const handleGoogleSignin = () => {
    console.log("google signin");
    signInwithGoogle()
      .then((res) => {
        console.log(res);
        setUser(res.user);
        navigate(from);
        navigate(from, { replace: true });
      })
      .catch((e) => {
       toast.error(e.message);
      });
  };

  const handleSubmit =async (e) => {
      e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const valid = validate(form);
    setErrors(valid);
    signIn(email, password)
      .then((res)=> {
        console.log(res)
        setUser(res.user)
        navigate(from)
        console.log(user)
      }).catch((error) =>{
      toast.error(error.message)
    })
  }
  function validate(form) {
    const err = {};
    const email = form.email.value.trim()
    const password = form.password.value.trim()
    const strongPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      err.email = "Enter a valid email";
      toast.error("Enter a valid email");
    }
    if (!password) {
      err.password = "Enter your password";
      toast.error("Enter your password");

    }
     if (!strongPass.test(password)) {
       err.password = "Password must include At least 1 letter,1 number,1 special character";
           toast.error("Password must include at least 1 letter, 1 number, 1 special character");

    }
      return err;
   }
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 mt-12">
      <h1 className="text-2xl font-bold mb-2">
        Welcome Back
      </h1>
        <ToastContainer position="top-right" autoClose={3000} />
      <p className="text-gray-600 mb-6"> Login to continue</p>
      <button
        type="button" className="w-full flex items-center justify-center gap-2 border-gray-300
       rounded-lg hover:bg:gray-100 transition font-medium"
        onClick={() =>handleGoogleSignin()}
        
      > <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="google"
          className="w-5 h-5"
        /> Login with Google
      </button>

      <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
         <div className="flex-1 h-px bg-gray-300"></div>
        </div>
       <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {
              errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )
              }
          </div>
          <div className="relative">
           <label className="block text-sm font-medium mb-1">Password</label>
            <input
            name="password" type={!show ? "text":"password"}  
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="absolute right-4 top-9 text-2xl" onClick={() => { setShow(!show) }}>{show? <IoIosEye />
                 :   <IoIosEyeOff />
                           }</span>
              
          </div>
          
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4" />
            Remember me
          </label>
          </div>
           <button 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 btn"  >
            Login
          </button>
        </form>
      </div>
       <p className="text-center mt-6 text-sm text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup"
          className="text-blue-600 font-semibold hover:underline ">
          Sign Up
        </Link>
      </p>
    </div>
  )
    
}
