import React from 'react'
import ChatIcon from './ChatIcon';
import styled from 'styled-components';
import { useState } from 'react';
import ChatBox from './ChatBox';

const ChatBot = () => {
    const [showChatBox,setShowChatBox] = useState(false);
  return (
    <ChatBotWrapper>
        <ChatBox setShowChatBox={setShowChatBox} showChatBox={showChatBox}/>
       
       <div className='chat-icon-ctn' onClick={()=>setShowChatBox(!showChatBox)}>
            <ChatIcon showChatBox={showChatBox}/>
        </div>
    </ChatBotWrapper>
    )
}

export default ChatBot;

const ChatBotWrapper =styled.div`
.chat-icon-ctn{
    position:absolute;
    right:20px;
    bottom:20px;
}

`