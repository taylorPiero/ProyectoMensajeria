import React from "react";

export default function MessageInput({ inputMessage, setInputMessage, handleSendMessage }) {
  return (
    <div className="type_msg">
      <div className="input_msg_write" style={{ display: "flex", flexDirection: "column-reverse", alignItems: "flex-start" }}>
        <input
          type="textarea"
          className="write_msg"
          placeholder="Type a message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          style={{ marginBottom: "10px", resize: "vertical", minHeight: "50px", width: "100%" }}
        />
        <button className="msg_send_btn" type="button" onClick={handleSendMessage} style={{ alignSelf: "flex-end" }}>
          <i className="fab fa-telegram-plane" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
