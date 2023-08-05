import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../middlewares/authContextHooks";
const boy = './../../Assets/Images/person-male.jpg'

const UserNavbar = () => {
  const { logoutUser,currentUser } = useAuth();
  const [navExpand, setNavExpand] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className="w-full bg-white shadow sticky top-0 z-50">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <h2 className="text-2xl font-bold">LOGO</h2>
            </Link>
          </div>
          <div
                onClick={() => setNavExpand(!navExpand)}
                className="text-gray-600 relative">
                <button className="flex flex-row items-center space-x-2 w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent md:w-auto md:inline md:mt-0 md:ml-4 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  <span>{currentUser?.firstName}</span>
                  <img
                    className="inline h-6 rounded-full"
                    src={boy}
                  />
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="inline w-4 h-4 transition-transform duration-200 transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={
                    navExpand
                      ? "absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-50"
                      : "hidden"
                  }
                >
                  <div className="py-2 bg-white text-blue-800 text-sm rounded-sm border border-main-color shadow-sm z-50">
                    <Link
                      to={"profile"}
                      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="#"
                    >
                      Profile
                    </Link>
                    <Link
                      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      to="feeds"
                    >
                      Feeds
                    </Link>
                    <Link
                      to={"dashboard"}
                      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to={"dashboard"}
                      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >
                      About
                    </Link>
                    <Link
                      to={"dashboard"}
                      className="block px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    >
                      Settings
                    </Link>
                    <div className="border-b" />
                    <div
                      className="cursor-pointer px-4 py-2 mt-2 text-sm bg-white md:mt-0 focus:text-gray-900 hover:bg-indigo-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => logoutUser()}
                    >
                      Logout
                    </div>
                  </div>
                </div>
             </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
