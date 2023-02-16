import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import boy from "./../../../Assets/Images/boy.jpg";

const Feed = ({feed}) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex gap-2 pb-2">
        <img
          src={boy}
          className="w-8 h-8 object-cover overflow-hidden rounded-lg"
        />
        <div>
          <p className="font-sm font-semibold text-gray-600 m-0 p-0">
            Md Mishrat Hossain
          </p>
          <p className="font-medium text-sm m-0 text-gray-500 p-0">Student</p>
        </div>
      </div>
      <h1 className="text-lg font-bold text-gray-700">
        {feed.title}
      </h1>
      <p className="text-gray-600">
       {feed.content}
      </p>
      <div className="mt-4 border border-gray-200" />
      <div className="flex gap-4 mt-2 rounded-md inline-block p-1">
        <button>
          <AiOutlineLike className="text-2xl" />
        </button>
        <button>
          <AiOutlineDislike className="text-2xl" />
        </button>
        <button><FaRegComment className="text-2xl"/></button>
      </div>
    </div>
  );
};

export default Feed;
