import React, { useEffect, useState } from "react";
import useAuth from "../../../middlewares/authContextHooks";
import useFollow from "../../../middlewares/followContextHooks";
import { Link } from "react-router-dom";

const Writters = () => {
    const {users} = useAuth()
    const { createFollow, myFollowers,getFollowers } = useFollow();

    const handleFollow = async(userId) => {
      console.log('clicked')
        await createFollow({ followed: userId });
        alert("followed successfully");
      };
      useEffect(()=>{
        getFollowers()
      },[myFollowers])

  return (
    <div className="p-4 mx-auto md:w-3/5">
        <div className="bg-white w-full shadow-sm rounded-sm p-4">
              {users?.map((user) => (
                <div className="flex m-2 md:m-4 gap-2 justify-between">
                  <div className="flex gap-2 pb-2 pr-2">
                    <img
                      src="https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg"
                      className="w-8 h-8 object-cover overflow-hidden rounded-lg"
                    />
                    <div>
                      <Link to={`/user/profile/${user._id}`}>
                        <p className="font-sm font-bold text-gray-600 m-0 p-0">
                          {user.firstName} {user.lastName}
                        </p>
                      </Link>
                      <p className="font-medium text-sm m-0 text-gray-500 p-0">
                        Student
                      </p>
                    </div>
                  </div>
                  {myFollowers?.some((entry) => entry.followed === user._id)?<button onClick={()=>{handleFollow(user._id)}} className="text-blue-500">following</button>:
                    <button onClick={()=>{handleFollow(user._id)}} className="text-blue-500">follow</button>}
                </div>
              ))}
        </div>
    </div>
  );
};

export default Writters;
