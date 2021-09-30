import React from "react";
import Message from "./message";
export default function Conversation(props) {
  return (
    <div>
      <div>{props.conversation["UUID"]}</div>
      {props.conversation.messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  );
}
