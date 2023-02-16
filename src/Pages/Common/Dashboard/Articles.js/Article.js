import React, { useEffect } from 'react';
import {AiFillDelete } from "react-icons/ai";
import {FaEdit} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import usePost from './../../../../middlewares/postContextHooks'
const Article = ({post,deletePost}) => {
  
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
      
      <Link to={`/user/dashboard/edit-post/${post._id}`} className="px-4 py-2 cursor-pointer">
       <FaEdit className="text-xl block mx-auto"/>
      </Link>
      <td>
      <button onClick={()=>deletePost(post._id)} className="px-4 py-2 cursor-pointer">
      <AiFillDelete className="text-xl block mx-auto"/>
      </button>
      </td>
    </tr>
    );
};

export default Article;