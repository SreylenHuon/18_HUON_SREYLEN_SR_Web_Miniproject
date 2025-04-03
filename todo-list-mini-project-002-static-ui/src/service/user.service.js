import headerToken from "@/app/api/headerToken";
import { baseUrl } from "./constants";

export const getAllUser = async () => {
  const header = await headerToken();

  try {
    const res = await fetch(`${baseUrl}/user`, { headers: header });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTask = async (
  workspaceId = "2138cc7d-4057-48a7-b15e-0c74f401db06"
) => {
  const header = await headerToken();

  try {
    const res = await fetch(`${baseUrl}/tasks/workspace/${workspaceId}`, {
      headers: header,
    });
    const dataTask = await res.json();
    return dataTask;
  } catch (error) {
    console.log(error);
  }
};
