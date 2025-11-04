import React, { useContext, useState,useEffect } from "react";
import { ToysContext } from "../Context/Context";
import { useLocation, useNavigate } from "react-router";

export default function SignupForm() {
    const {createUser,updatePr,setLoading,user,setUser,signInwithGoogle}=useContext(ToysContext)
  const location = useLocation()
    const handleGoogleSignin = () => {
    console.log("google signin");
    signInwithGoogle()
      .then((res) => {
        console.log(res);
        setUser(res.user);
        navigate(from);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const from = location.state || "/";
  const navigate = useNavigate();
  useEffect(() => {
  if (user) {
    navigate("/");
  }
}, [user]);

    const handleSubmit =async (e) => {
      e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
      const name = form.name.value;
    const valid = validate(form);
      setErrors(valid);
      createUser(email, password)
        .then((res) => {
         
          setUser(res.user)
          navigate(from)
          setLoading(false)
          updatePr(name, photoUrl).then((res) => {
             console.log("profile updated")
          })
        })
        .catch((e) => {
        console.log(e)
      })
   }

  const [errors, setErrors] = useState({});
  
  function validate(form) {
    const err = {};
    const email = form.email.value.trim()
    const password = form.password.value.trim()
    const name = form.name.value.trim()
    const strongPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!name) err.name = "Enter first name";
    if (
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    )
      err.email = "Enter a valid email";
    if (!password || password.length < 8)
      err.password = "Password must be at least 8 characters";
    if (!form.agree.checked) err.agree = "You must accept terms";
    if (!strongPass.test(password)) {
     err.password = "Password must include At least 6 digits,1 letter,1 number and 1 special character";
    }
    return err;
  }
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 mt-6">
      <h1 className="text-2xl font-bold mb-2">Create an account</h1>

         <button
        type="button" className="w-full flex items-center justify-center mt-6 mb-4 border-gray-300
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className=" gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 mt-1">Photo Url</label>
            <input
              name="photoUrl"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
           
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            About (optional)
          </label>
          <textarea
            name="about"
            className="w-full border rounded-lg px-3 py-2 h-24 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="agree"
            className="w-5 h-5"
          />
          <label className="text-sm">
            I agree to the{" "}
            <a href="#" className="text-blue-600 underline">
              terms
            </a>
          </label>
        </div>
        {errors.agree && (
          <p className="text-red-500 text-sm">{errors.agree}</p>
        )}

        <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg
           hover:bg-blue-700 transition disabled:bg-gray-400 btn"
        >
                         Creat Account        </button>
      </form>
    </div>
  );
}
