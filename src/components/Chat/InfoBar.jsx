import React from "react";
import styles from "./infoBar.module.css";

import { MdClose } from "react-icons/md";
import { FiCircle } from "react-icons/fi";

const InfoBar = ({ room }) => (
  <div className={styles.infoBar}>
    <div className={styles.leftInnerContainer}>
      <FiCircle
        color="transparent"
        fill="#81F7F7"
        className={styles.onlineIcon}
      />
      <h3>{room}</h3>
    </div>
    <div className={styles.rightInnerContainer}>
      <a href="/">
        <MdClose fill="white" />
      </a>
    </div>
  </div>
);

export default InfoBar;
