import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isAgency, setIsAgency] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(isAgency);
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center h-[90vh] px-4 bg-gray-50">
      <div className="w-full max-w-sm h-[97%] bg-[#f2f2f2] border border-gray-400 rounded-sm shadow-md p-6 flex flex-col">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Create your PopX account
        </h2>

        <form
          onSubmit={handleSignup}
          className="w-full flex flex-col justify-between flex-grow mt-2"
        >
          <div className="flex flex-col gap-5 overflow-y-auto pb-4 mt-2">
            {/* Full name Field */}
            <div className="relative mt-2">
              <label className="absolute left-2 -top-3 px-2 bg-[#f2f2f2] text-purple-600 text-sm font-semibold">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-2 border-gray-400 border-2 rounded-md"
                type="text"
                placeholder="Enter full name"
                required
              />
            </div>

            {/* Number Field */}
            <div className="relative">
              <label className="absolute left-2 px-2 -top-3 bg-[#f2f2f2] text-purple-600 text-sm font-semibold">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-2 border-gray-400 border-2 rounded-md"
                type="tel"
                placeholder="Enter phone number"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="absolute left-2 -top-3 px-2 bg-[#f2f2f2] text-purple-600 text-sm font-semibold">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-2 border-gray-400 border-2 rounded-md"
                type="email"
                placeholder="Enter email address"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="absolute left-2 px-2 -top-3 bg-[#f2f2f2] text-purple-600 text-sm font-semibold">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-2 border-gray-400 border-2 rounded-md"
                type="password"
                placeholder="Enter password"
                required
              />
            </div>

            {/* Company name Field */}
            <div className="relative">
              <label className="absolute left-2 -top-3 px-2 bg-[#f2f2f2] text-purple-600 text-sm font-semibold">
                Company name
              </label>
              <input
                className="w-full p-2 border-gray-400 border-2 rounded-md"
                type="text"
                placeholder="Enter company name"
                required
              />
            </div>

            {/* Radio Options */}
            <div className="text-sm font-medium text-gray-800 mt-2">
              Are you an agency?<span className="text-red-500">*</span>
            </div>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  onChange={() => setIsAgency(true)}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="agency"
                  onChange={() => setIsAgency(false)}
                />
                <span>No</span>
              </label>
            </div>
          </div>
          
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 mt-4 rounded-md font-medium w-full cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
