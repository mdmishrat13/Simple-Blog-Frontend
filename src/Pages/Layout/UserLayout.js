import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../../Componants/Navbar/UserNavbar";

const UserLayout = () => {
  return (
    <>
      <UserNavbar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default UserLayout;
