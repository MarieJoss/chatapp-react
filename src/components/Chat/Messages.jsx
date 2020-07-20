import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";
import styles from "./messages.module.css";

function Messages({ messages, name }) {
  return (
    <ScrollToBottom classname={styles.messages}>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;
