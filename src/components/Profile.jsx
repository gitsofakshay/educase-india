import React from "react";
import { Camera } from "lucide-react";
import ProfilePic from "../assets/profile-pic.jpg";

export default function Profile() {
  return (
    <div className="flex justify-center items-center h-[90vh] px-4 bg-gray-50">
      <div className="w-full max-w-sm h-full bg-[#f2f2f2] border border-gray-400 rounded-sm shadow-md overflow-y-auto">
        {/* Top Title Bar */}
        <div className="bg-white px-6 py-4 border-b border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        {/* Profile Info */}
        <div className="px-6 py-4">
          <div className="flex items-center gap-4 mb-4 relative">
            <div className="relative w-20 h-20">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-purple-700 rounded-full p-1 shadow">
                <Camera
                  color="purple"
                  fill="white"
                  className="h-5 w-5 text-white"
                />
              </div>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                Marry Doe
              </h3>
              <p className="text-sm text-gray-700 capitalize">
                marry@gmail.com
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-800 leading-relaxed pt-2">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam
            Erat, Sed Diam
          </p>
        </div>

        <div
          className="border-y border-dashed border-gray-400 mt-3 w-full px-6 py-4"
          style={{ height: "300px" }}
        ></div>
      </div>
    </div>
  );
}
