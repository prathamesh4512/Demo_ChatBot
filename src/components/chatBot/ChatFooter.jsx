import React from 'react'
import styled from 'styled-components';
import { AiOutlineSend } from 'react-icons/ai';
import { useState } from 'react';

const ChatFooter = ({sendMessage}) => {

  const [text,setText] = useState('');
  
  const handleClick =()=>{
    sendMessage({type:"user",text}); 
    setText('');
  }

  return (
    <ChatFooterWrapper>
      <textarea type="text" placeholder='Write a message'  
        value={text}
        onChange={(e)=>setText(e?.target?.value)}
        onKeyDown={(e)=>{
         if(e.key==='Enter'){
          e.preventDefault(); 
          handleClick();
         }
        }}
        />
      <div onClick={handleClick}>
       <AiOutlineSend/>
      </div>
    </ChatFooterWrapper>
  )
}

export default ChatFooter;

const ChatFooterWrapper = styled.div`
    padding:8px;
    border-top: 2px solid #f2f5f8;
    display:flex;
    textarea{
      background-color:transparent;
      border:none;
      padding:5px;  
      color:black;
      font-size:16px;
      font-weight:500;
      width:90%;
      word-break: break-word;
      overflow:hidden;
      resize:none;
      line-height:22px;
      font-family:sans-serif;
      &:focus{
        outline:none;
      }
    }
    svg{
      color: grey;
      height: 20px;
      width: 30px;
      transform:rotate(-25deg);
      cursor:pointer;
    }
`