import React from "react";

const EditProfile = () => {
  return (
    <div className="w-10/12 bg-white">
        <div className="rounded  shadow p-6">
          <div className="pb-6">
            <label
              htmlFor="name"
              className="font-semibold text-gray-700 block pb-1"
            >
             First Name
            </label>
            <div className="flex">
              <input
                id="username"
                className="border-1 bg-gray-200  rounded-r px-4 py-2 w-full"
                type="text"
                defaultValue="Md Mishrat"
              />
            </div>
          </div>
          <div className="pb-4">
            <label
              htmlFor="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Last Name
            </label>
            <input
              id="lName"
              className="border-1  rounded-r px-4 py-2 w-full bg-gray-200"
              type="text"
              defaultValue="Hossain"
            />
          </div>
      </div>
    </div>
  );
};

export default EditProfile;
