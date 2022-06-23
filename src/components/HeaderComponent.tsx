import React from "react";
import InputText from "../components/InputText";

interface HeaderComponentProps {
  username: string;
  roomid: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setRoomid: React.Dispatch<React.SetStateAction<string>>;
  joinRoom: (e: React.SyntheticEvent) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  username,
  roomid,
  setUsername,
  setRoomid,
  joinRoom,
}) => {
  return (
    <div className="py-3">
      <h3 className="my-3 uppercase">This is our react chat</h3>
      <div className="flex md:flex-row flex-col w-full gap-2 items-center ">
        <div className="md:basis-1/3 w-full">
          <InputText
            value={username}
            onChange={setUsername}
            name="username"
            placeholder="UserName..."
          />
        </div>
        <div className="md:basis-1/3 w-full">
          <InputText
            value={roomid}
            onChange={setRoomid}
            name="roomid"
            placeholder="RoomId..."
          />
        </div>
        <button
          onClick={joinRoom}
          className="w-full md:basis-1/3 justify-center item-center bg-slate-400 text-slate-700 hover:bg-slate-700 hover:text-white font-bold py-2 px-4 rounded"
        >
          Join Room!
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
