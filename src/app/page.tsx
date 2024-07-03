"use client"
import InputField from "@/components/InputField";
import MessageContainer from "@/components/MessageContainer";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css"


export default function Home() {
  // const [messageList, setMessageList] = useState<string[]>([]);
  // const [welcome, setWelcome] = useState<string[]>([]);
  // const [message, setMessage] = useState("")
  // const socketRef = useRef<WebSocket | null>(null);
  // const [nickName, setUserName] = useState("")



  return (
    <div>
      <div className={styles.App}>
        
        <div>


        {/* {welcome.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))} */}


          {/* <MessageContainer messageList={messageList} /> */}
       
        </div>

        {/* <InputField message={message} setMessage={setMessage} sendMessage={sendMessage} /> */}
      </div>
    </div>
  );



}
