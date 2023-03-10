import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../../../Componants/SideBar/UserSidebar";

const Dashboard = () => {
  return (
    <section className="overflow-y-scroll w-full grid  grid-cols-[192px_minmax(900px,_1fr)]">
      <div className="">
        <div className="h-screen fixed z-20">
          <UserSidebar />
        </div>
      </div>

      <div className="">
       <Outlet/>
      </div>
    </section>
  );
};

export default Dashboard;
