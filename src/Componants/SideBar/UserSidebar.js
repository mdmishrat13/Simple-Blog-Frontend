import React from "react";
import { RxDashboard } from "react-icons/rx";
import { RiArticleLine } from "react-icons/ri";
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import {FiSettings,FiLogOut} from "react-icons/fi";
import { Link } from "react-router-dom";
const UserSidebar = () => {
  return (
    <div className="w-48">
      <div className="p-2 h-screen overflow-y-auto text-center bg-gray-900">
        <Link to='' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <RxDashboard />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Dashboard
          </span>
        </Link>
        <Link to='articles' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <RiArticleLine />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Articles
          </span>
        </Link>
        <Link to='Analytics' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <TbBrandGoogleAnalytics />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Analytics
          </span>
        </Link>
        <Link to='settings' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <FiSettings />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Settings
          </span>
        </Link>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <FiLogOut/>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
