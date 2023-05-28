import React from 'react'
import styled,{ css } from 'styled-components';
import ChatHeader from './ChatHeader';

const ChatBox = ({setShowChatBox,showChatBox}) => {
  return (
    <ChatBoxWrapper showChatBox={showChatBox}>
        <ChatHeader/>
    </ChatBoxWrapper>
  )
}

export default ChatBox;

const ChatBoxWrapper = styled.div`
position:absolute;
right:50px;
background:white;
height:450px;
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