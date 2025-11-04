import React, { useContext, useState,useEffect } from "react";
import { ToysContext } from "../Context/Context";
import { useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignupForm() {
    const {createUser,updatePr,setLoading,user,setUser,signInwithGoogle}=useContext(ToysContext)
   if (loading) return <Spinner />
  const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [errors, setErrors] = useState({});

  useEffect(() => {
  if (user) {
    navigate("/");
  }
}, [user]);
    const handleGoogleSignin = () => {      
          signInwithGoogle()
            .then((res) => {
              setUser(res.user);
                   toast.success("Login Success Full")
                   setTimeout(() => {
                  navigate(from, { replace: true });
            }, 1000); 
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
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;
      const agree = form.agree?.checked;
       const valid = validate({ name, photoUrl, email, password, agree });
      setErrors(valid);
      
 if (Object.keys(valid).length > 0) return; 
      try {
        const res =
          await createUser(email, password);
          setUser(res.user);
        setLoading(false);
        await updatePr(name, photoUrl);
        toast.success("Signup successful! ");
        setTimeout(() => {
          navigate(from, { replace: true });
    }, 500);
      }
      catch (error) {
    toast.error(error.message);
    setLoading(false);
  
  }
};
  function validate({ name, photoUrl, email, password, agree }) {
  const err = {};
  const strongPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!name) err.name = "Enter your Name";
  if (!photoUrl) err.photoUrl = "Enter your Photo URL";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    err.email = "Enter a valid email";
  if (!password || password.length < 8)
    err.password = "Password must be at least 8 characters";
  if (!agree) err.agree = "You must accept terms";
  if (password && !strongPass.test(password))
    err.password =
      "Password must include at least 1 letter, 1 number, and 1 special character";
  Object.values(err).forEach((msg) => toast.error(msg));

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
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            
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
        

        <button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg
           hover:bg-blue-700 transition disabled:bg-gray-400 btn"
        >
                         Creat Account        </button>
      </form>
    </div>
  );
}
