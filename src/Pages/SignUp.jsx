import React, { useState } from "react";

export default function SignupForm() {
    const handleSubmit =async (e) => {
      e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const valid = validate(form);
    setErrors(valid);
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
     err.password = "Password must include At least 1 letter,1 number,1 special character";
    }
    return err;
  }
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 mt-6">
      <h1 className="text-2xl font-bold mb-2">Create an account</h1>


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
