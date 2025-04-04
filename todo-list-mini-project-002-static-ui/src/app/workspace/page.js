import CardComponent from "@/components/card";
import { getAllTask } from "@/service/user.service";
import React from "react";

const WorkSpacePage = async () => {
  const { payload: dataTask } = await getAllTask();

  const taskNotStart = dataTask.filter((item) => {
    return item.status === "NOT_STARTED";
  });
  const taskInProgress = dataTask.filter((item) => {
    return item.status === "IN_PROGRESS";
  });
  const taskFinished = dataTask.filter((item) => {
    return item.status === "FINISHED";
  });
  return (
    <div className="flex  w-full gap-10 mb-20">
      <div className="w-40%">{/* <WorkSpaceComponent /> */}</div>
      <div className="w-full">
        {/* <div className="w-full ">
          <HeaderComponent userData={userData} />
        </div> */}

        <div className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl py-5 text-[black]    ">
              HRD Design
            </h2>
          </div>
          {/* <HeadertsubComponent /> */}
          <div className="flex  gap-10 ">
            <div className="gap-5 mb-5">
              <span className="text-[#F96666] font-medium">Not Started</span>
              <div className="w-full border-t border-red-300 mb-8 "></div>
              <CardComponent tasks={taskNotStart} />
            </div>

            <div className="mb-5">
              <span className="text-[#4379F2] font-medium">In progress</span>
              <div className="w-full border-t border-[#4379F2] mb-8"></div>
              <CardComponent tasks={taskInProgress} />
            </div>
            <div>
              <span className="text-[#009990] font-medium">Finished</span>
              <div className="w-full border-t border-[#009990] mb-8"></div>
              <CardComponent tasks={taskFinished} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSpacePage;
