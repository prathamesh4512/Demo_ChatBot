import React from 'react'
import styled,{ css } from 'styled-components';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { useState } from 'react';

const ChatBox = ({setShowChatBox,showChatBox}) => {
  const [messages,setMessages] = useState([{
    type: "admin",
    text: "Hello there 👋, I'm Viren, nice to meet you 🙂 What's your name?"
  },
]);
let userName = messages?.[1]?.text;

  const sendMessage = (newMessage)=>{
    if (messages?.length===1) userName=newMessage.text;
    setMessages((prevState)=>prevState.concat([{...newMessage}]));
    replyUser(newMessage);
  };

  const replyUser  = (newMessage)=>{
    if(messages?.length===1){
      setMessages(prevState=>prevState.concat({type:"admin",text:`Hello ${userName},can you please share your email`}))
    }
    else{
      if(checkIsEmail(newMessage.text)){
        setMessages(prevState=>prevState.concat({type:"admin",text:"Thank you for your email. Our team will Reach out to you."}))
      }else{
        setMessages(prevState=>prevState.concat({type:"admin",text:"Please enter a valid email."}))
      }
    }
  }

  const checkIsEmail = (email)=>{
    const validationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.match(validationRegex);
  }

  return (
    <ChatBoxWrapper showChatBox={showChatBox}>
        <ChatHeader/>
        <ChatBody messages={messages} setMessages={setMessages}/>
        <ChatFooter sendMessage={sendMessage}/>
    </ChatBoxWrapper>
  )
}

export default ChatBox;

const ChatBoxWrapper = styled.div`
position:absolute;
right:50px;
background:white;
height:500px;
width:400px;
border-radius:0.5rem;
overflow:hidden;

transition: all 0.3s ease-in-out;
opacity:0;
bottom:0;
z-index:-99;

${(props) =>
    props.showChatBox
    && css`
    opacity 1;
    transform: translateY(-100px);
    z-index: 99;
   
    `}

.cross-icon{
    height:25px;
    width:25px;
    cursor:pointer;
    margin-left:auto;
}

`