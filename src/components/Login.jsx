import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="flex justify-center items-center h-[90vh] px-4 bg-gray-50">
      <div className="w-full max-w-sm h-full bg-[#f2f2f2] border border-gray-400 rounded-sm shadow-md p-6 flex flex-col items-start overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-2">Login to your account</h2>
        <p className="text-sm text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          {/* Email Field */}
          <div className="relative">
            <label className="absolute left-2 -top-3 px-2 bg-[#f2f2f2] text-purple-600 text-sm font-semibold">
              Email Address
            </label>
            <input
              className="w-full p-2 border-gray-400 border-2 rounded-xl"
              type="email"
              placeholder="Enter email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="absolute left-2 px-2 -top-3 bg-[#f2f2f2] text-purple-600 text-sm font-semibold">
              Password
            </label>
            <input
              className="w-full p-2 border-gray-400 border-2 rounded-xl"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 mt-2 rounded-md font-medium disabled:bg-purple-300 cursor-pointer"
            disabled={!email || !password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
