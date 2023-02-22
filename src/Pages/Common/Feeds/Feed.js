import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import boy from "./../../../Assets/Images/boy.jpg";
import Comments from "./Comments";

const Feed = ({ feed }) => {
  const [commentExpand,setCommentExpand]= useState(false)
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex gap-2 pb-2">
        <img
          src={boy}
          className="w-8 h-8 object-cover overflow-hidden rounded-lg"
        />
        <div>
          <p className="font-sm font-bold text-gray-600 m-0 p-0">
            {feed.user?.firstName + " " + feed.user?.lastName}
          </p>
          <p className="font-medium text-sm m-0 text-gray-500 p-0">Student</p>
        </div>
      </div>
      <h1 className="text-lg font-bold text-gray-700">{feed.title}</h1>
      <p className="text-gray-600">{feed.content}</p>
      <div className="mt-4 border border-gray-200" />
      <div className="grid grid-cols-3 mt-2 gap-4 rounded-md inline-block p-1">
        <div className="flex items-center gap-4 text-center">
          <button className="flex items-center justify-center gap-1">
            <AiOutlineLike className="text-2xl block text-center " />
            <p className="text-xl">42</p>
          </button>
          <button className="flex items-center justify-center gap-1">
            <AiOutlineDislike className="text-2xl block text-center" />
            <p className="text-xl">12</p>
          </button>
        </div>
        <button className="flex items-center justify-center gap-1" onClick={()=>setCommentExpand(!commentExpand)}>
          <FaRegComment className="focus:bg-gray-300 text-2xl inline-block text-center" />
          <p className="text-xl">46</p>
        </button>
        <button className="flex items-center justify-end gap-1" onClick={()=>setCommentExpand(!commentExpand)}>
          <GrView className="focus:bg-gray-300 text-2xl inline-block" />
          <p className="text-xl">46</p>
        </button>
      </div>
      <div className={`${commentExpand?"block":'hidden'}`}>
      <Comments feed={feed._id}/>
      </div>
    </div>
  );
};

export default Feed;
