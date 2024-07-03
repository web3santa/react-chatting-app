import React, { useState } from "react";
import styles from "./MessageContainer.module.css"

const MessageContainer = ({ messageList }: any) => {
  return (
    <div>
      {messageList.map((message:any, index:any) => {
        return (
          <div key={index} className={styles.messageContainer}>
            <div className="yourMessageContainer">
              <img src="/profile.png" className={styles.profileImage} />
              <div className="yourMessage">{message}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageContainer;
