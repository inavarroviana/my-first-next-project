"use client";
import styles from "../src/app/posts/layout.module.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p className={styles.counter}>Count: {count} </p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default Counter;
