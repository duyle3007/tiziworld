import http from "@/utils/http";

export const fetchProjectList = async () => {
  const response = await http.get("/project");
  if (response.status !== 200) {
    throw new Error("Failed to fetch project list");
  }
  return response.data;
};
