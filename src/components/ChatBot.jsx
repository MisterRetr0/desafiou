import React, { useState } from "react";
import "../styles/ChatBot.css";
import botImg from "../assets/bot.png";
import ChatInput from "./chatInput";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatInput onClose={() => setOpen(false)} />}
      <button className="chatbot-btn" onClick={() => setOpen(true)}>
        <img src={botImg} alt="ChatBot" className="chatbot-img" />
      </button>
    </>
  );
};

export default ChatBot;