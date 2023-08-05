import React, { useEffect, useState } from "react";
import useAuth from "../../../middlewares/authContextHooks";
import { useParams } from "react-router-dom";
import axios from "axios";

const PublicProfile = () => {
  const [loading,setLoading]= useState(true)
  const [profile,setUserProfile] = useState(null)
  const id = useParams()

  const fetchData = async()=>{
    setLoading(true)
    const data = await axios.get(`http://localhost:5000/api/v1/auth/profile/${id.id}`)
    setUserProfile(data.data)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData(id.id)
  },[])

  return (
    <>
    {loading?<p>Loading...</p>:
    <div className="grid items-center justify-center gap-4 p-5">
      <div className="bg-white shadow-sm rounded-sm">
        <div className="p-3">
          <div className="image overflow-hidden">
            <img
              className="h-48 w-48 mx-auto"
              src="https://lh3.googleusercontent.com/a/AEdFTp6T5254M-kynpzulODa5aNevNlX1FNukuRv2UaNow=s96-c-rg-br100"
              alt
            />
          </div>
          <h1 className="text-gray-900 font-bold text-xl text-center leading-8 my-1">
            {profile?.firstName} {profile?.lastName}
          </h1>
          {profile?.bio?.length && (
            <h3 className="text-gray-600 md:w-8/12 mx-auto text-center font-lg text-semibold leading-6"></h3>
          )}
          <ul className="bg-gray-100 grid grid-cols-[1fr_1fr] gap-4 text-gray-600 hover:text-gray-700 hover:shadow md:py-1 px-3 mt-3 divide-x rounded shadow-sm">
            <li className="flex justify-center items-center gap-4 py-2 md:py-3">
              <span>Follower</span>
              <span className="text-md font-bold md:text-lg">7347581</span>
            </li>
            <li className="flex justify-center items-center gap-4 py-2 md:py-3">
              <span>Following</span>
              <span className="text-md font-bold md:text-lg">0</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span className="text-green-500">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="tracking-wide">Info</span>
          </div>
          <div className="border-b" />
          <div className="text-gray-700">
            <div className="grid text-md">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Total Posts:</div>
                <div className="px-4 py-2">145</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Total Likes:</div>
                <div className="px-4 py-2">4533</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Total Comments:</div>
                <div className="px-4 py-2">432</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span className="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="border-b" />
            <div className="text-gray-700">
              <div className="grid text-md">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Name</div>
                  <div className="px-4 py-2">{profile?.firstName + " " + profile?.lastName}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">{profile?.gender}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">{profile?.phone}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Address</div>
                  <div className="px-4 py-2">{profile?.address}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">
                    <p>{profile?.email}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">{profile?.birthDate}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
    
  );
};

export default PublicProfile;
