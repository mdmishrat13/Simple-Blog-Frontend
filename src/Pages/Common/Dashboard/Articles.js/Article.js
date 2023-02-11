import React from 'react';
import {AiFillDelete } from "react-icons/ai";
import {FaEdit} from 'react-icons/fa'
const Article = () => {
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
             Post Titles
            </th>
            <th scope="col" className="px-6 py-3">
              Reacts
            </th>
            <th scope="col" className="px-6 py-3">
              Comments
            </th>
            
            <th scope="col" className="px-6 py-3">
              Update
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, architecto.
            </th>
            <td className="px-6 py-4">2.5k</td>
            <td className="px-6 py-4">1.3k</td>
            
            <td className="px-6 py-4 cursor-pointer">
             <FaEdit className="text-xl block mx-auto"/>
            </td>
            <td className="px-6 py-4 cursor-pointer">
             <AiFillDelete className="text-xl block mx-auto"/>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default Article;