import HeaderComponent from "@/components/HeaderComponent";
import WorkSpaceComponent from "@/components/WorkSpaceComponent";
import { getAllUser } from "@/service/user.service";
import React from "react";

const workSpaceLayout = async ({ children }) => {
  const userData = await getAllUser();
  return (
    <>
      <div className="w-full bg-[#FFFFFF] ">
        <HeaderComponent userData={userData} />
      </div>

      <div className="flex">
        <WorkSpaceComponent />
        {children}
      </div>
    </>
  );
};

export default workSpaceLayout;
