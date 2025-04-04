"use server";
import { createWorkspaceService } from "@/service/createWorkspaceService";
export const createWorkSpaceAction = async (formData) => {
  const data = {
    workspaceName: formData.get("workspacename"),
  };
  await createWorkspaceService(data);
  //   console.log("FormData", formData.get("workspacename"));
};
