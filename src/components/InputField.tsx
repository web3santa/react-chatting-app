import React from "react";
import styles from "./InputField.module.css";

type InputFieldProps = {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({ message, setMessage, sendMessage }) => {
  return (
    <div className={styles.inputArea}>
      <div className={styles.plusButton}>+</div>
      <form onSubmit={sendMessage} className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type in here…"
          value={message}
          className={styles.input}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button disabled={message === ""} type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default InputField;