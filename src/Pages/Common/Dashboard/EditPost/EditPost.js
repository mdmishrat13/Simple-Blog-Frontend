import React from "react";

const EditPost = () => {
  return (
    <div className="p-4">
      <form className="bg-white p-4 rounded shadow w-full">
        <div className="pb-2">
          <label htmlFor="" className="font-semibold text-gray-700 block pb-1">Post Title</label>
          <input type="text" className="border-1 bg-gray-200  rounded-r px-4 py-2 w-full" />
        </div>
        <div className="pb-2">
          <label htmlFor="" className="font-semibold text-gray-700 block pb-1">Post Description</label>
          <textarea rows={12} type="text" className="border-1 bg-gray-200  rounded-r px-4 py-2 w-full" />
        </div>
        <div className="text-right">
        <button className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-900">Post Now</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
