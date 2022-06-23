import React, { FC } from "react";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as SendIcon } from "../assets/icons/send.svg";
import InputText from "./InputText";

interface IChatFooter {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

const ChatFooter: FC<IChatFooter> = ({ message, setMessage, handleSubmit }) => {
  return (
    <form className="flex flex-row items-center" onSubmit={handleSubmit}>
      <div className="basis-4/5">
        <InputText
          value={message}
          onChange={setMessage}
          Icon={<SearchIcon />}
          placeholder="yo..."
          name="message"
        />
      </div>

      <button
        className="flex flex-row justify-center item-center ml-1 basis-1/5 bg-slate-400 text-slate-700 hover:bg-slate-700 hover:text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        <SendIcon />
        <p className="ml-1 hidden md:flex">Send </p>
      </button>
    </form>
  );
};

export default ChatFooter;
