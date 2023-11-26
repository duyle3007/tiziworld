import axios from "axios";

function getToken() {
  if (typeof window !== "undefined") {
    return `Bearer ${localStorage.getItem("token")}`;
  }
  return null;
}
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: getToken(),
  },
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default http;
