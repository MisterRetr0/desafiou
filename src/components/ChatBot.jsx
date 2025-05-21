import React from "react";
import "../styles/ChatBot.css"; // Asegúrate de tener este archivo CSS
import botImg from "../assets/bot.png"; // Usa tu imagen de bot aquí

const ChatBot = () => (
  <button className="chatbot-btn">
    <img src={botImg} alt="ChatBot" className="chatbot-img" />
  </button>
);

export default ChatBot;