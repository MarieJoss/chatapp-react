import React from "react";

import styles from "./input.module.css";
import { IoIosSend } from "react-icons/io";

const Input = ({ message, sendMessage, setMessage }) => (
  <form className={styles.form}>
    <input
      className={styles.input}
      type="text"
      placeholder="Type your message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <button className={styles.sendButton} onClick={(e) => sendMessage(e)}>
      <IoIosSend size="30" />
    </button>
  </form>
);

export default Input;
