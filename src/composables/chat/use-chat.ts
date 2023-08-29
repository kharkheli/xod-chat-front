import type { Sender, MessageData } from "../../packages/message/model/message";
import { ref } from "vue";
import io from "socket.io-client";

export default function () {
  const messages = ref<MessageData[]>([]);
  const me = ref<Sender>();
  const friend = ref<Sender>();
  const status = ref<"connected" | "disconnected" | "connecting">(
    "disconnected",
  );

  const socket = io("https://xod-chat-32pzq.ondigitalocean.app/");

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("welcome", (user: Sender) => {
    console.log("welcome");
    me.value = user;
  });

  socket.on("new chat", (user) => {
    messages.value = [];
    friend.value = user;
    status.value = "connected";
  });

  socket.on("chat message", (message: MessageData) => {
    messages.value.push(message);
    socket.emit("delivered", message.id);
  });

  socket.on("delivered", (id: string) => {
    const message = messages.value.find((msg) => msg.id === id);
    if (message) {
      message.state = "received";
    }
  });

  socket.on("disconnected", () => {
    socket.emit("disconnected");
    status.value = "disconnected";
  });

  socket.on("friend found", (user) => {
    socket.emit("friend found", user);
  });

  function sendMessage(msg: string) {
    const message: MessageData = {
      id: Math.random().toString(36).slice(2, 9),
      sender: me.value as Sender,
      content: msg,
      createdAt: new Date().toISOString(),
      state: "sent",
    };
    messages.value.push(message);
    socket.emit("chat message", message);
  }

  function findFriend() {
    status.value = "connecting";
    socket.emit("find friend");
  }

  return {
    messages,
    me,
    friend,
    status,
    sendMessage,
    findFriend,
  };
}
