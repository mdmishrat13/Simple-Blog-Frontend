import React from "react";
import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div className="p-4 flex gap-4">
      <div className="bg-white md:w-[250px] h-full">
        <ul className="p-2">
          <li>
            <Link to="" className="p-2 hover:bg-gray-200 block">
              Edit Profile
            </Link>
          </li>
          <li>
            <Link to="edit-password" className="p-2 hover:bg-gray-200 block">
              {" "}
              Change Password
            </Link>
          </li>
          <li>
            <Link to="" className="p-2 hover:bg-gray-200 block">
              {" "}
              Contact Information
            </Link>
          </li>
          <li>
            <Link to="edit-password" className="p-2 hover:bg-gray-200 block">
              Address
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Settings;
