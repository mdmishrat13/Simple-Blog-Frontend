import React from 'react';
import {AiFillDelete } from "react-icons/ai";
import {FaEdit} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Article = ({post}) => {
    return (
      <tr className="bg-white border-b hover:bg-gray-50 ">
            
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {post.title.slice(0,55)+'...'}
      </th>
      <td className="px-4 py-2">2.5k</td>
      <td className="px-4 py-2">1.3k</td>
      
      <Link to='/user/dashboard/edit-post/something' className="px-4 py-2 cursor-pointer">
       <FaEdit className="text-xl block mx-auto"/>
      </Link>
      <td className="px-4 py-2 cursor-pointer">
       <AiFillDelete className="text-xl block mx-auto"/>
      </td>
    </tr>
    );
};

export default Article;