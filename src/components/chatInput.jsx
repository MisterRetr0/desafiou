import React, { useRef } from "react";
import "../styles/ChatBot.css";

const ChatInput = ({ onClose }) => {
  const inputRef = useRef(null);

  // Opcional: enfoca el input al abrir
  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="chatbot-chatbox">
      <div className="chatbot-chatbox-header">
        <span>OCTOPUS AI</span>
        <button className="chatbot-close-btn" onClick={onClose}>×</button>
      </div>
      <div className="chatbot-chatbox-body">
        <div className="chatbot-message chatbot-message-bot">
          ¡Hola! ¿En qué puedo ayudarte?
        </div>
      </div>
      <form className="chatbot-chatbox-input" onSubmit={e => e.preventDefault()}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Escribe tu mensaje..."
          autoFocus
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ChatInput;