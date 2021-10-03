import React, { useState } from "react";
import Message from "./message";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Conversation(props) {
  const [openCoversation, setOpenConversation] = useState(false);

  const toggleOpen = () => {
    setOpenConversation(!openCoversation);
  };
  return (
    <div>
      <Card onClick={toggleOpen}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.conversation["name"]}
          </Typography>
        </CardContent>
      </Card>
      {openCoversation &&
        props.conversation.messages.map((message) => (
          <Message message={message} />
        ))}
    </div>
  );
}
