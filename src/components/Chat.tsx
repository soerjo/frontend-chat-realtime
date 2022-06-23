import React, { useState, useRef, useEffect } from "react";
import { Socket } from "socket.io-client";
import ChatFooter from "./ChatFooter";

interface IMessageData {
  room: string;
  author: string;
  message: string;
  time: number;
}

type Messages = Omit<IMessageData, "room">;

interface ChatProps {
  roomid: string;
  username: string;
  socket: Socket;
}

const Chat: React.FC<ChatProps> = ({ socket, roomid, username }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const refScroll = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    socket.on("receive_message", data => {
      setMessages(val => [...val, data]);
    });
  }, [socket]);

  const handleSendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (message !== "") {
      const messageData: IMessageData = {
        author: username,
        room: roomid,
        time: new Date().getTime(),
        message,
      };
      socket.emit("send_message", messageData);
      setMessages(val => [...val, messageData]);
      setMessage("");
    }
  };

  useEffect(() => {
    refScroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full">
      <div>header</div>
      <div className="border-slate-500 border-2 flex flex-col h-[32rem] rounded-lg p-3 overflow-y-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            ref={refScroll}
            className={`flex flex-col ${
              message.author === username ? " text-right" : " text-left"
            }`}
          >
            <div className={`block`}>
              <div
                className={`${
                  message.author === username
                    ? " bg-green-400 float-right text-right"
                    : " bg-orange-300 float-left text-left"
                }  rounded-md`}
              >
                <h3 className="p-5">{message.message}</h3>
              </div>
            </div>
            <p className="text-xs font-light">
              {new Date(message.time).toISOString()}
            </p>
          </div>
        ))}
      </div>
      <ChatFooter
        message={message}
        setMessage={setMessage}
        handleSubmit={handleSendMessage}
      />
    </div>
  );
};

export default Chat;
