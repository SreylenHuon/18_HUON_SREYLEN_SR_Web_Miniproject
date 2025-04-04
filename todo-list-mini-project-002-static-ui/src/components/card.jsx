"use client";
import { deleteTaskAction } from "@/action/taskAction";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Clock, Ellipsis } from "lucide-react";
import React, { useActionState } from "react";
import { DialogFooter } from "./ui/dialog";
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

export default function CardComponent({ tasks }) {
  // const taskNotStartStatus = dataTask?.payload?.filter((task) => {
  //   return task.status === "NOT_STARTED";
  // });
  // const taskInProgresStatus = taskData?.payload?.filter((task) => {
  //   return task.status === "IN_PROGRESS";
  // });
  // const taskFinishStatus = taskData?.payload?.filter((task) => {
  //   return task.status === "FINISHED";
  // });

  const [state, formAction, isPending] = useActionState(deleteTaskAction, null);
  const handleUpdate = (taskId) => {
    console.log("Update task:", taskId);
    // You can trigger another modal or navigate to edit page
  };

  return (
    <div>
      {tasks?.map((item) => (
        <div
          key={item?.taskId}
          className="border gap-10 border-gray-300 rounded-xl w-[320px] mb-5"
        >
          <div>
            <div className="p-5">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold capitalize">
                  {item?.taskTitle}
                </h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <button>
                      <Ellipsis />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-white rounded-xl p-6 shadow-xl w-[300px]">
                    <DialogTitle></DialogTitle>
                    <DialogFooter>
                      <div className="text-center mb-4">
                        <h2 className="text-lg font-bold">Choose Option</h2>
                      </div>
                      <div className="flex flex-col gap-4">
                        <form action={formAction}>
                          <input type="hidden" name="id" value={item.taskId} />

                          <button
                            onClick={() => handleUpdate(item.taskId)}
                            className="w-full py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                          >
                            Update
                          </button>
                          <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </form>
                      </div>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {/* task detials */}
              <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
                {item.taskDetails}
              </p>

              <div className="flex justify-between items-center mt-4">
                {/* tag */}
                <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg">
                  {item.tag}
                </p>

                {/* status */}
                <div className={`rounded-full w-8 h-8 bg-watermelon-red`}>
                  {/* {item.status} */}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
              <Select>
                <SelectTrigger
                  className={`w-36 truncate border-watermelon-red text-watermelon-red`}
                >
                  <SelectValue placeholder={"NOT_STARTED"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
                  <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
                  <SelectItem value="FINISHED">FINISHED</SelectItem>
                </SelectContent>
              </Select>

              {/* date */}
              <p className="flex gap-3 text-light-steel-blue ">
                <Clock size={22} /> {formatDate(item?.endDate)}
              </p>
            </div>
          </div>

          {/* progress */}
        </div>
      ))}
    </div>
  );
}
