import React, { useEffect, useState } from "react";
import "./styles/App.css";
import io from "socket.io-client";
import Chat from "./components/Chat";
import HeaderComponent from "./components/HeaderComponent";

const URL = process.env.REACT_APP_URL;
console.log(URL);

const socket = io(URL || "http://localhost:4000");

function App() {
  const [username, setUsername] = useState<string>("");
  const [roomid, setRoomid] = useState<string>("");

  const joinRoom = () => {
    if (username !== "" && roomid !== "") {
      console.log("onClick!");
      socket.emit("join_room", {
        userName: username,
        roomId: roomid,
      });
    }
  };

  useEffect(() => {
    document.title = "Realtime_Chat";
  });

  return (
    <>
      <title>Realtime_Chat_Soerjo</title>
      <meta />
      <div className="App container mx-auto px-5">
        <HeaderComponent
          username={username}
          setUsername={setUsername}
          roomid={roomid}
          setRoomid={setRoomid}
          joinRoom={joinRoom}
        />
        <div className="flex justify-center">
          <Chat roomid={roomid} username={username} socket={socket} />
        </div>
      </div>
    </>
  );
}

export default App;
