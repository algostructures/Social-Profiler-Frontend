import React from "react";
import Message from "./message";
export default function Conversation(props) {
  return (
    <div>
      {props.messages.map((message) => (
        <Message messages={message} />
      ))}
    </div>
  );
}
