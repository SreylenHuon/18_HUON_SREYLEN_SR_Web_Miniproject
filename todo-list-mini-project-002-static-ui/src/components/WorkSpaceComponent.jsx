import { getAllTask } from "@/service/user.service";
import { workSpaceService } from "@/service/workspace.service";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import React from "react";

const WorkSpaceComponent = async (dataTask) => {
  const { payload: dataWorkSpace } = await workSpaceService();
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <main className="p-5">
      <div className="w-[300px] ">
        <div className="flex items-center justify-between ">
          <div className="">
            <h2 className="font-bold text-4xl mb-10">
              Plan <span className="text-orange-500">I</span>t
            </h2>

            <h2 className="text-base font-semibold text-gray-800 dark:text-white">
              Workspace
            </h2>
          </div>

          <button className="p-0.5 hover:bg-gray-100 duration-200 transition-colors text-gray-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 border rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>

        <nav className="mt-4 -mx-3 space-y-3 ">
          {dataWorkSpace.map((data) => (
            <button
              key={data.workspaceId}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            >
              <div className="flex items-center gap-x-2 ">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getRandomColor() }}
                ></span>

                <span className="text-2xl font-medium text-[#1E293B]">
                  {data.workspaceName}
                </span>
              </div>
              <Ellipsis />
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
};

export default WorkSpaceComponent;
