import headerToken from "@/app/api/headerToken";
export async function createWorkspaceService(dataWorkspace) {
  const token = headerToken();
  console.log("dataworkspace", dataWorkspace);
  try {
    const res = await fetch(`${process.env.NEXT_APIURL}/workspace`, {
      method: "POST",
      headers: {
        ...token,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataWorkspace),
    });

    const data = await res.json();
    console.log("dataworkspace", data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
