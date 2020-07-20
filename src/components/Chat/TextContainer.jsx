import React from "react";

import { FiCircle } from "react-icons/fi";
import styles from "./textContainer.module.css";

const TextContainer = ({ users }) => (
  <div className={styles.textContainer}>
    <div>
      <h1>Chat App en temps réelle</h1>
      <h2>Crée avec React, Socket.io, Express, NodeJS</h2>
    </div>
    {users ? (
      <div>
        <h1>Personnes connectées:</h1>
        <div className={styles.activeContainer}>
          <h2>
            {users.map(({ name }) => (
              <div key={name} className={styles.activeItem}>
                <FiCircle
                  color="transparent"
                  fill="#81F7F7"
                  size="15"
                  className={styles.onlineIcon}
                />
                {name}
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
