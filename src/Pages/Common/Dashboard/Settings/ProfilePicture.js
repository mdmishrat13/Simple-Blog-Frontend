import React from "react";

const ProfilePicture = () => {
  return (
    <div className="w-10/12 bg-white">
        <div className="mx-auto w-24 text-center ">
          <div className="relative w-24">
            <img
              className="w-24 h-24 rounded-full absolute"
              src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt
            />
            <div className="w-24 h-24 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
              <img
                className="hidden group-hover:block w-12"
                src="https://www.svgrepo.com/show/33565/upload.svg"
                alt
              />
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
