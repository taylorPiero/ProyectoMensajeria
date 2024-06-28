import React from "react";

export default function MessageList({ messages }) {
  return (
    <div>
      <div className="card-header " style={{ marginLeft: '0', marginRight: '0', padding: '4px' }}>
        <h3 className="card-title">oliver</h3>
        <div className="card-tools">
          <span title="3 New Messages" className="badge badge-primary">
            3
          </span>
          <button
            type="button"
            className="btn btn-tool"
            title="Contacts"
            data-widget="chat-pane-toggle"
          >
            <i className="fas fa-comments" />
          </button>
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="remove"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>

      <div className="msg_history">
        {messages.map((msg, index) =>
          msg.sender === "yo" ? (
            <div className="outgoing_msg" key={index}>
              <div className="sent_msg">
                <p>{msg.text}</p>
                <span className="time_date">ahora</span>
              </div>
            </div>
          ) : (
            <div className="incoming_msg" key={index}>
              <div className="incoming_msg_img">
                <img
                  src="https://ptetutorials.com/images/user-profile.png"
                  alt="user"
                />
              </div>
              <div className="received_msg">
                <div className="received_withd_msg">
                  <p>{msg.text}</p>
                  <span className="time_date">ahora</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
