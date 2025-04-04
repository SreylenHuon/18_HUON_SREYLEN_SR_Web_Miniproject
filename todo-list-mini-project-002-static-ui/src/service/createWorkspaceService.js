import headerToken from "@/app/api/headerToken";
export async function createWorkspaceService(dataWorkspace) {
  const token = await headerToken();
  const { workspaceName } = dataWorkspace;
  try {
    const res = await fetch(`${process.env.NEXT_APIURL}/workspace`, {
      method: "POST",
      headers: token,
      body: JSON.stringify(workspaceName),
    });

    const data = await res.json();
    console.log("dataworkspace", data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
