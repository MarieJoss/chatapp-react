import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./join.module.css";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinInnerContainer}>
        <h1 className={styles.heading}>Join</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            className={styles.joinInput}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Room"
            className={`${styles.joinInput} mt-20`}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={`${styles.button} mt-20`} type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
