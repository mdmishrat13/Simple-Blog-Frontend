import React from 'react';
import {AiFillDelete } from "react-icons/ai";
import {FaEdit} from 'react-icons/fa'
const Article = () => {
    return (
        <table className="text-sm w-full text-left text-gray-500 p-2">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2">
             Post Titles
            </th>
            <th scope="col" className="px-4 py-2">
              Reacts
            </th>
            <th scope="col" className="px-4 py-2">
              Comments
            </th>
            
            <th scope="col" className="px-4 py-2">
              Update
            </th>
            <th scope="col" className="px-4 py-2">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-gray-50 ">
            
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, architecto.
            </th>
            <td className="px-4 py-2">2.5k</td>
            <td className="px-4 py-2">1.3k</td>
            
            <td className="px-4 py-2 cursor-pointer">
             <FaEdit className="text-xl block mx-auto"/>
            </td>
            <td className="px-4 py-2 cursor-pointer">
             <AiFillDelete className="text-xl block mx-auto"/>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default Article;