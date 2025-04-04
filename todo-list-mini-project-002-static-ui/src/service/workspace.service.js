import headerToken from "@/app/api/headerToken";
import next from "next";

export const workSpaceService = async () => {
  const header = await headerToken();
  try {
    const workspace = await fetch(
      `${process.env.NEXTAUTH_URL}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
      {
        next: { tags: ["workspace"] },
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
