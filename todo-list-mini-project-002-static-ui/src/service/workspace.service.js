import headerToken from "@/app/api/headerToken";

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

export const updateFavoritByWorkspaceId = async (workspaceId, isFavorite) => {
  const header = await headerToken();
  try {
    const workspace = await fetch(
      `${process.env.NEXTAUTH_URL}/workspaces/${workspaceId}/favorite?favorite=${isFavorite}`,
      {
        next: { tags: ["workspace"] },
        headers: header,
      }
    );
    const dataWorkSpace = await workspace.json();
    return dataWorkSpace;
  } catch (e) {
    console.log("Error:", e);
  }
};
