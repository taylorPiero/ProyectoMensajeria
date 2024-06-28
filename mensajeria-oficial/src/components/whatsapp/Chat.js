import React, { useState } from "react";
import ChatList from "./ChatList";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
//import "./Chat.css"; // Importa tus estilos CSS

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
    setMessages([...messages, { text: inputMessage, sender: "yo" }]);
    setInputMessage("");
  };

  return (
    <div className="container">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Chat WhatsApp</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Chat</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="messaging">
                <div className="inbox_msg">
                  <ChatList />
                  <div className="mesgs">
                    <MessageList messages={messages} />
                    <MessageInput
                      inputMessage={inputMessage}
                      setInputMessage={setInputMessage}
                      handleSendMessage={handleSendMessage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
