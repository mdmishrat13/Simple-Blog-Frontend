import React from 'react';

const EditPassword = () => {
    return (
        <div className="w-10/12 bg-white">
        <div className="rounded  shadow p-6">
          <div className="pb-2">
            <label
              htmlFor="name"
              className="font-semibold text-gray-700 block pb-1"
            >
             Old Password
            </label>
            <div className="flex">
              <input
                id="username"
                className="border-1 bg-gray-200  rounded-r px-4 py-2 w-full"
                type="text"
                placeholder="********"
              />
            </div>
          </div>
          <p className='pb-2'>
            Forgot Password?
          </p>
          <div className="pb-4">
            <label
              htmlFor="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              New Password
            </label>
            <input
              id="lName"
              className="border-1  rounded-r px-4 py-2 w-full bg-gray-200"
              type="text"
              placeholder="*******"
            />
          </div>
          <div className="pb-4">
            <label
              htmlFor="about"
              className="font-semibold text-gray-700 block pb-1"
            >
              Confirm Password
            </label>
            <input
              id="lName"
              className="border-1  rounded-r px-4 py-2 w-full bg-gray-200"
              type="text"
              placeholder="*******"
            />
          </div>
      </div>
    </div>
    );
};

export default EditPassword;