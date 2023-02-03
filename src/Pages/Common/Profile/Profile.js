import React from "react";

const Profile = () => {
  return (
    <div classname="bg-gray-100">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-gray-700">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src="https://lh3.googleusercontent.com/a/AEdFTp6T5254M-kynpzulODa5aNevNlX1FNukuRv2UaNow=s96-c-rg-br100"
                  alt
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl text-center leading-8 my-1">
                Md Mishrat Hossain
              </h1>
              <h3 className="text-gray-600 text-center font-lg text-semibold leading-6">
              MERN Stack developer || React Js ‌‌|| Node js || Express js || MongoDb || Redux || Firebase Authentication || Javascript
              </h3>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                
                <li className="flex items-center py-3">
                  <span>Joined in</span>
                  <span className="ml-auto">Feb-3-2023</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="border-b"/>
              <div className="text-gray-700">
                <div className="grid text-md">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2">Md Mishrat Hossain</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Male</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">01750792368</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Current Address
                    </div>
                    <div className="px-4 py-2">
                      Demajani, Shajahanpur, Bogura
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                       <p> mdmishrat13@gmail.com</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">12-Aug-2000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
