import React, { useEffect, useState } from "react";
import usePost from "../../../middlewares/postContextHooks";
import Feed from "./Feed";
import useAuth from "../../../middlewares/authContextHooks";
import { Link } from "react-router-dom";
import useFollow from "../../../middlewares/followContextHooks";
import boy from "./../../../Assets/Images/boy.jpg";
import './../../../Assets/Styles/styles.css'


const Feeds = () => {
  const { feeds, isPostLoading } = usePost();
  const { users } = useAuth();
  const { createFollow,unFollow, myFollowers,getFollowers } = useFollow();
  const handleFollow = async(userId) => {
    console.log('clicked')
      await createFollow({ followed: userId });
      alert("followed successfully");
    };
  const handleUnFollow = async(userId) => {
    console.log('clicked')
      await unFollow(userId);
      alert("unfollowed successfully");
    };
    useEffect(()=>{
      getFollowers()
    },[myFollowers])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr-4fr] lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_3fr] md:gap-4">
      {isPostLoading && !feeds && <h1>Loading...</h1>}
      <div className="md:p-4">
        <div className="fixed hidden md:block w-[23%]">
          <div className="bg-white p-2 shadow rounded">
            <div className="relative ">
              
            </div>
            <div className="pt-2">
              <button className="text-left py-2 w-full hover:bg-gray-200">
                {" "}
                <span className="pl-2">My Following</span>{" "}
              </button>
            </div>
            <div className="">
              <button className="text-left py-2 w-full hover:bg-gray-200">
                {" "}
                <span className="pl-2">All Posts</span>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-4 md:pr-4 lg:pr-0">
        {isPostLoading && <h1>Loading...</h1>}
        {!feeds?.length && !isPostLoading && <h1>No Feeds Available</h1>}
        <div className="grid gap-4">
          {feeds?.map((feed) => (
            <Feed feed={feed} key={feed._id} />
          ))}
        </div>
      </div>

      <div className="py-4 pr-4">
        <div className="fixed md:block w-[23%]">
          <div className="p-4 bg-white rounded shadow">
            <h1 className="pb-2 shadow">Popular Writers</h1>
            <div className="">
              {users?.slice(0,5).map((user) => (
                <div className="flex gap-2 my-3 justify-between">
                  <div className="flex gap-2 pb-2 pr-2">
                    <img
                      src="https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg"
                      className="w-8 h-8 object-cover overflow-hidden rounded-lg"
                    />
                      <Link to={`/user/profile/${user._id}`}>
                        <p className="font-sm font-bold text-gray-600 m-0 p-0">
                          {user.firstName} {user.lastName}
                        </p>
                      </Link>
                  </div>
                  {myFollowers?.some((entry) => entry.followed === user._id)?<button onClick={()=>{handleUnFollow(user._id)}} className="text-blue-500">unfollow</button>:
                    <button onClick={()=>{handleFollow(user._id)}} className="text-blue-500">follow</button>}
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to='/user/writters' className="bg-gray-200 block py-2 w-full">
                Show more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
