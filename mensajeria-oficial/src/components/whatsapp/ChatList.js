import React from "react";

export default function ChatList() {
  const getCurrentDate = () => {
    const options = { month: 'short', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <div className="inbox_people">
      <div className="headind_srch">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <input type="text" className="search-bar" placeholder="Search" />
            <span className="input-group-addon">
              <button type="button">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="inbox_chat">
        {/* Ejemplo de mensajes de chat */}
        {[
          { name: 'Taylor', message: 'Prueba chat' },
          { name: 'oliver', message: 'holii' },
          { name: 'Alfredo', message: 'hola' },
          { name: 'Luis', message: 'hola' },
          { name: 'Paolo', message: 'prueba 2' },
          { name: 'Camilo', message: 'hola' },
        ].map((chat, index) => (
          <div className="chat_list" key={index}>
            <div className="chat_people">
              <div className="chat_img">
                <img src="https://ptetutorials.com/images/user-profile.png" alt="user" />
              </div>
              <div className="chat_ib">
                <h5>{chat.name} <span className="chat_date">{getCurrentDate()}</span></h5>
                <p>{chat.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
