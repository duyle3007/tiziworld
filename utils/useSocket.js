import { io } from "socket.io-client";

const token =
  typeof window !== "undefined" ? `${localStorage.getItem("token")}` : null;

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
  transports: ["websocket"],
  auth: {
    token: token,
  },
});

export default socket;
