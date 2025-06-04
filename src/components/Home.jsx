import { Link } from "react-router-dom";

export default function Home() {
 return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-sm bg-[#f2f2f2] border border-gray-300 rounded-sm shadow-md p-6 flex flex-col justify-between h-[650px]">        
        <div className="flex flex-col justify-end h-full">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome to PopX</h1>
            <p className="text-sm text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/register">
              <button className="w-full bg-purple-600 text-white py-2 rounded-md font-medium cursor-pointer">
                Create Account
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full bg-gray-400 text-black py-2 rounded-md font-medium cursor-pointer">
                Already Registered? Login
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
