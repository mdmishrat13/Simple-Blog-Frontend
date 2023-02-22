import React from "react";

const Comment = ({ comment }) => {
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
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
