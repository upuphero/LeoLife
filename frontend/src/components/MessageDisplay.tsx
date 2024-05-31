import React, { useState, useEffect } from "react";

const MessageDisplay: React.FC = () => {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:3001/message");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Failed to fetch message:", error);
        setMessage("Failed to load message");
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Message from Backend:</h1>
      <p>{message}</p>
    </div>
  );
};

export default MessageDisplay;
