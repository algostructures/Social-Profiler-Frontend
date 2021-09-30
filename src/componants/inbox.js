import Conversation from "./conversation";
import useConversations from "../hooks/useConversations";

export default function Inbox() {
  const conversations = useConversations();
  return (
    <div>
      {conversations.map((conversation) => (
        <Conversation conversation={conversation} />
      ))}
    </div>
  );
}
