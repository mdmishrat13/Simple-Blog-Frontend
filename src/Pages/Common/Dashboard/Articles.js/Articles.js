import React from "react";
import { AiOutlinePlus,AiFillDelete } from "react-icons/ai";
import {FaEdit} from 'react-icons/fa'
import Article from "./Article";

const Articles = () => {
  return (
    <div className="z-1 p-4">
      <div className="pb-4 bg-white p-4">
        <div className="flex justify-between">
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
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
        <div className="px-4 py-2 bg-gray-600 text-white cursor-pointer hover:bg-gray-700 flex item-center">
          <AiOutlinePlus className="block text-lg mt-1"/>  Add New Post
        </div>
        </div>
      </div>
      <Article/>
    </div>
  );
};

export default Articles;
