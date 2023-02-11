import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Article from "../Articles.js/Article";

const DashboardMain = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-2">
        <div className="bg-white">
          <div className="p-5">
            <h1 className="text-2xl">Hello, Md Mishrat Hossain!</h1>
            <p className="mt-2 text-lg pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              nam.
            </p>
            <button className="flex item-center rounded-md px-4 py-2 bg-gray-600 duration-300 text-white hover:bg-gray-700">
              <AiOutlinePlus className=" block mr-2 mt-1 text-lg" />
              Write a new post
            </button>
          </div>
        </div>
        <div className="bg-white p-5 grid md:grid-cols-3 gap-2">
          <div className="bg-gray-200 m-2 px-6 py-4">
            <span className="text-white flex item-center">
              <div className="bg-gray-900 mt-1 w-8 h-8 p-2 rounded-md">
                <AiOutlineDollarCircle />
              </div>
              <div className="ml-2 text-black">
                <h1 className="text-xl">$250</h1>
                <p>Earnings</p>
              </div>
            </span>
          </div>
          <div className="bg-gray-200 m-2 px-6 py-4">
            <span className="text-white flex item-center">
              <div className="bg-gray-900 mt-1 w-8 h-8 p-2 rounded-md">
                <AiOutlineDollarCircle />
              </div>
              <div className="ml-2 text-black">
                <h1 className="text-xl">12123+</h1>
                <p>Reach</p>
              </div>
            </span>
          </div>
          <div className="bg-gray-200 m-2 px-6 py-4">
            <span className="text-white flex item-center">
              <div className="bg-gray-900 mt-1 w-8 h-8 p-2 rounded-md">
                <AiOutlineDollarCircle />
              </div>
              <div className="ml-2 text-black">
                <h1 className="text-xl">3223+</h1>
                <p>Reaction</p>
              </div>
            </span>
          </div>
        </div>
        <div className="bg-white">
            <h1 className="text-xl p-4">Posts</h1>
            <Article />
          </div>
        <div className="bg-white">
          <div className="p-5">
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
            <span className="p-2">
              <h1>this is for test purpose</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
