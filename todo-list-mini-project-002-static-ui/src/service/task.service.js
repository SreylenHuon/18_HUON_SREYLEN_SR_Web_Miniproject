import headerToken from "@/app/api/headerToken";

export const deleteTaskService = async (taskId) => {
  const header = await headerToken();
  try {
    const workspace = await fetch(
      `${process.env.NEXTAUTH_URL}/task/${taskId}/workspace/2138cc7d-4057-48a7-b15e-0c74f401db06`,
      {
        next: { tags: ["task"] },
        headers: header,
      }
    );
    const dataWorkSpace = await workspace.json();
    console.log("dataWorkSpace", dataWorkSpace);
    return dataWorkSpace;
  } catch (e) {
    console.log("Error:", e);
  }
};
