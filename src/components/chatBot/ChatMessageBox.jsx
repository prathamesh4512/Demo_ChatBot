import React from 'react'
import styled, {css} from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';


const ChatMessageBox = ({message}) => {
    const {type, text} = message;
  return (
    <ChatMessageBoxWrapper>
       {type ==="admin" && <div className='avtar'>
            <AiOutlineUser/>
        </div>}
    <div className='message_body'>
        {type ==="admin" && <text className='name'>Viren</text>}
        <MessageBox type={type}>
            <div className='text'>
                {text}
            </div>
        </MessageBox>
    </div>
    </ChatMessageBoxWrapper>
  )
}

export default ChatMessageBox;

const ChatMessageBoxWrapper = styled.div`
display:flex;
gap:10px;
.name{
    font-size: 12px;
    font-weight:600;
    line-height: 18px;
    color: rgb(66, 91, 118);
}
.avtar{
    background:grey;
    max-height:30px;
    min-height:30px;
    min-width:30px;
    max-width:30px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    svg{
        width:20px;
        height:20px;
    }
}
.message_body{
    width:100%;
}
`;

const MessageBox = styled.div`
position:relative;
width:100%;
.text{
    // position: absolute;
    // min-height: 12px;
    word-break: break-word;  
    // box-sizing: border-box;
    border-style: solid;
    border-width: 0px;
    border-color: rgb(203, 214, 226);
    background-color: ${props=>props?.type==="admin"?"rgb(234, 240, 246)":"rgb(0, 164, 189)"};
    color: ${props=>props?.type==="admin"?"rgb(66, 91, 118)":"white"};
    border-radius: ${props=>props?.type==="admin"? "0px 8px 8px":"8px 0px 8px"};
    width:fit-content;
    // max-width: 85%;
    padding:10px;
    font-size:14px;
    margin-bottom:10px;
    margin-left: ${props=>props?.type==="admin"?"0px":"auto"}
}
    `