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
        <Link to='' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-white text-white hover:text-gray-900">
          <RxDashboard />
          <p className="text-[15px] ml-4 font-bold">
            Dashboard
          </p>
        </Link>
        <Link to='articles' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-white hover:bg-white hover:text-gray-900">
          <RiArticleLine />
          <p className="text-[15px] ml-4 font-bold">
            Articles
          </p>
        </Link>
        <Link to='Analytics' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-white text-white hover:text-gray-900">
          <TbBrandGoogleAnalytics />
          <p className="text-[15px] ml-4 font-bold">
            Analytics
          </p>
        </Link>
        <Link to='settings' className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-white text-white hover:text-gray-900">
          <FiSettings />
          <p className="text-[15px] ml-4 font-bold">
            Settings
          </p>
        </Link>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-white text-white hover:text-gray-900">
          <FiLogOut/>
          <p className="text-[15px] ml-4 font-bold">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
