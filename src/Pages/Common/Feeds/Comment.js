import React, { useRef, useState } from "react";
import useComment from "../../../middlewares/commentContextHooks";
import useAuth from "../../../middlewares/authContextHooks";

const Comment = ({ comment,handleDelete,setComment,commen}) => {
  const [editComment, setEditComment] = useState(false);
  const [updatedData,setUpdatedData] = useState(commen.comment)
  const {updateComment} = useComment()
  const {currentUser}= useAuth()

  const handleUpdate = async(data)=>{
    console.log('consoling edited comment',data)
    const updatedComment=await updateComment(commen._id,data)
    const updated = comment?.map(cmnt=>{
      if(cmnt._id==updatedComment._id){
        return{...cmnt,comment:updateComment}
      }
    })
    setComment(updated)
    setEditComment(!editComment)
    alert('updated successfully')
  }

  return (
    <div className="flex gap-2 my-4">
      <img
        src="https://avatars.githubusercontent.com/u/66993868?v=4"
        className="w-8 h-8 object-cover overflow-hidden rounded-lg"
      />
      <div className="bg-gray-200 p-1 rounded-lg w-full">
        <p className="font-sm font-semibold text-gray-600 m-0 p-0">
          Md Mishrat Hossain
        </p>
        {!editComment ? (
          <p>{commen.comment}</p>
        ) : (
          <textarea
          onChange={(e)=>setUpdatedData(e.target.value)}
            className="w-full rounded"
            rows="2"
            value={updatedData}
          ></textarea>
        )}
        {commen.user==currentUser._id&&<div>
        {editComment ? (
          <div>
            {" "}
            <button className="p-1 mr-2" onClick={() => setEditComment(!editComment)}>Cancel</button>
            <button onClick={() => handleUpdate(updatedData)}>Done</button>
          </div>
        ) : (
          <div>
            <button className="p-1 mr-2" onClick={() => setEditComment(!editComment)}>Edit</button>
            <button onClick={()=>handleDelete(commen._id)} className="mr-3">Delete</button>{" "}
          </div>
        )}
          
          </div>}
      </div>
    </div>
  );
};

export default Comment;
