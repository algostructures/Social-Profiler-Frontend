import { useState, useEffect } from "react";

const useConversations = () => {
  const [allConvesations, setAllConversations] = useState([]);

  useEffect(() => {
    const fetchConverstions = async () => {
      const rsp = await fetch("/messages.json");
      const conversations = await rsp.json();
      setAllConversations(conversations);
    };
    fetchConverstions();
  }, []);

  return allConvesations;
};

export default useConversations;
