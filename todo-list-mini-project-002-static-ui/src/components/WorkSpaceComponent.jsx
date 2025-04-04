import { getAllTask } from "@/service/user.service";
import { workSpaceService } from "@/service/workspace.service";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormWorkspaceComponent from "./FormWorkspaceComponent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { createWorkSpaceAction } from "@/action/createWorkspaceAction";

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
          {/* <FormWorkspaceComponent /> */}
          <Dialog>
            <DialogTrigger>
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
            </DialogTrigger>

            <DialogContent>
              <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
                <div className="p-4 sm:p-7">
                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                      Create WorkSpace
                    </h1>
                  </div>

                  <div className="mt-5">
                    <form action={createWorkSpaceAction}>
                      <div className="grid gap-y-4">
                        <div>
                          <label
                            for="email"
                            className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                          >
                            Workspace Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="email"
                              name="workspacename"
                              className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                              required
                              aria-describedby="email-error"
                            />
                          </div>
                          <p
                            className="hidden text-xs text-red-600 mt-2"
                            id="email-error"
                          >
                            Please include a valid email address so we can get
                            back to you
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="w-[100px] py-2 px-2 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
        {/* close workspace */}
        <nav>
          <h2 className="text-2xl font-medium">Forvorith</h2>
          <nav className="mt-4 -mx-3 space-y-3 ">
            {/* {dataWorkSpace.map((data) => (
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
            ))} */}
          </nav>
        </nav>
      </div>
    </main>
  );
};

export default WorkSpaceComponent;
