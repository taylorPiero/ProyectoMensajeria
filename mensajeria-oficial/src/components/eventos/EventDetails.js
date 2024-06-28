
import React, { useState, useEffect } from 'react';

export default function EventDetails({ event, sendEvent }) {
  if (!event) return <div>Select an event to see details</div>;

  return (
    <div>
      <h2>Event Details</h2>
      <p>Name: {event.name}</p>
      <p>Date: {event.date}</p>
      <p>Details: {event.details}</p>
      <button onClick={() => sendEvent(event, "whatsapp")}>Send via WhatsApp</button>
      <button onClick={() => sendEvent(event, "email")}>Send via Email</button>
    </div>
  );
}
