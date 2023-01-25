import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "../../Componants/Navbar/UserNavbar";
import UserSidebar from "../../Componants/SideBar/UserSidebar";

const UserLayout = () => {
  return (
    <>
    <UserNavbar/>
      <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
        <UserSidebar/>
        <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default UserLayout;
