import React, { useRef } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import ChatMessageBox from './ChatMessageBox';

const ChatBody = ({messages,setMessages}) => {
    const chatBodyRef = useRef(null);
    useEffect(()=>{
        chatBodyRef.current?.scrollIntoView({behavior: 'smooth',block: 'end'});
    },[messages])
  return (
    <ChatBodyWrapper>
        {messages.map((ele,index)=>(<ChatMessageBox message={ele} key={index} />))}
        <div ref={chatBodyRef}></div>
    </ChatBodyWrapper>
  )
}

export default ChatBody;

const ChatBodyWrapper=styled.div`
padding : 10px;
height:70%;
max-height:70%;
overflow:auto;
`;