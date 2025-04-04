"use server";
import { createWorkspaceService } from "@/service/createWorkspaceService";
import { revalidateTag } from "next/cache";
export const createWorkSpaceAction = async (formData) => {
  const data = {
    workspaceName: formData.get("workspacename"),
  };
  await createWorkspaceService(data);
  revalidateTag("workspace");
  //   console.log("FormData", formData.get("workspacename"));
};
