import React from "react";
import usePost from "../../../middlewares/postContextHooks";
import Feed from "./Feed";

const Feeds = () => {
  const { feeds, getFeeds, isPostLoading } = usePost();
  // if(!feeds){
    // getFeeds()
  // }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr-4fr] lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[1fr_3fr] gap-4">
      <div className="p-4">
        <div className="fixed hidden md:block w-[23%]">
          <div className="bg-white p-2 shadow rounded">
            <div className="relative ">
              <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-[100%] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search for items"
              />
            </div>
            <div className="pt-2">
              <button className="text-left py-2 w-full hover:bg-gray-200"> <span className="pl-2">Most Recent</span> </button>
            </div>
            <div className="">
              <button className="text-left py-2 w-full hover:bg-gray-200"> <span className="pl-2">Most Popular</span> </button>
            </div>
            <div className="">
              <button className="text-left py-2 w-full hover:bg-gray-200"> <span className="pl-2">Most Viewed</span> </button>
            </div>
            <div className="">
              <button className="text-left py-2 w-full hover:bg-gray-200"> <span className="pl-2">Most Commented</span> </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-4 md:pr-4 lg:pr-0">
        {isPostLoading&&<h1>Loading...</h1>}
        {!feeds?.length && !isPostLoading &&(
          <h1>No Feeds Available</h1>
        )}
          <div className="grid gap-4">
            {feeds?.map((feed) => (
              <Feed feed={feed} key={feed._id} />
            ))}
          </div>
        
      </div>

      <div className="py-4 pr-4">
       <div className="fixed md:block overflow-y-scroll w-[23%]">
       <div className="p-4 bg-white rounded shadow">
        <h1>Popular Writers</h1>
          <div className="flex gap-2 my-3 justify-between">
            <div className="flex gap-2 pb-2">
              <img
                src='https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg'
                className="w-8 h-8 object-cover overflow-hidden rounded-lg"
              />
              <div>
                <p className="font-sm font-bold text-gray-600 m-0 p-0">
                 Md Mishrat Hossain
                </p>
                <p className="font-medium text-sm m-0 text-gray-500 p-0">
                  Student
                </p>
              </div>
            </div>
            <button className="text-blue-500">Follow</button>
          </div>
          <div className="flex gap-2 my-3 justify-between">
            <div className="flex gap-2 pb-2">
              <img
                src='https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg'
                className="w-8 h-8 object-cover overflow-hidden rounded-lg"
              />
              <div>
                <p className="font-sm font-bold text-gray-600 m-0 p-0">
                 Md Mishrat Hossain
                </p>
                <p className="font-medium text-sm m-0 text-gray-500 p-0">
                  Student
                </p>
              </div>
            </div>
            <button className="text-blue-500">Follow</button>
          </div>
          <div className="flex gap-2 my-3 justify-between">
            <div className="flex gap-2 pb-2">
              <img
                src='https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg'
                className="w-8 h-8 object-cover overflow-hidden rounded-lg"
              />
              <div>
                <p className="font-sm font-bold text-gray-600 m-0 p-0">
                 Md Mishrat Hossain
                </p>
                <p className="font-medium text-sm m-0 text-gray-500 p-0">
                  Student
                </p>
              </div>
            </div>
            <button className="text-blue-500">Follow</button>
          </div>
          <div className="flex gap-2 my-3 justify-between">
            <div className="flex gap-2 pb-2">
              <img
                src='https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg'
                className="w-8 h-8 object-cover overflow-hidden rounded-lg"
              />
              <div>
                <p className="font-sm font-bold text-gray-600 m-0 p-0">
                 Md Mishrat Hossain
                </p>
                <p className="font-medium text-sm m-0 text-gray-500 p-0">
                  Student
                </p>
              </div>
            </div>
            <button className="text-blue-500">Follow</button>
          </div>
          <div className="flex gap-2 my-3 justify-between">
            <div className="flex gap-2 pb-2">
              <img
                src='https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg'
                className="w-8 h-8 object-cover overflow-hidden rounded-lg"
              />
              <div>
                <p className="font-sm font-bold text-gray-600 m-0 p-0">
                 Md Mishrat Hossain
                </p>
                <p className="font-medium text-sm m-0 text-gray-500 p-0">
                  Student
                </p>
              </div>
            </div>
            <button className="text-blue-500">Follow</button>
          </div>
          <div className="flex gap-2 my-3 justify-between">
            <div className="flex gap-2 pb-2">
              <img
                src='https://www.shutterstock.com/image-photo/dhaka-bangladesh-september-2014-portrait-260nw-2195200093.jpg'
                className="w-8 h-8 object-cover overflow-hidden rounded-lg"
              />
              <div>
                <p className="font-sm font-bold text-gray-600 m-0 p-0">
                 Md Mishrat Hossain
                </p>
                <p className="font-medium text-sm m-0 text-gray-500 p-0">
                  Student
                </p>
              </div>
            </div>
            <button className="text-blue-500">Follow</button>
          </div>
        <div className="text-center">
        <button className="bg-gray-200 block py-2 w-full">Show more</button>
        </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Feeds;
