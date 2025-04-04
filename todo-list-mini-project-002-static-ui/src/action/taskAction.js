"use service";

import { deleteTaskService } from "@/service/task.service";

export const deleteTaskAction = async (_, formData) => {
  const taskId = formData.get("id");

  await deleteTaskService(taskId);
  revalidateTag("task");
};
