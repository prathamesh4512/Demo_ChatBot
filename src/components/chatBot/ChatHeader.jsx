import React from 'react'
import styled from 'styled-components';
import leftArrowIcon from '../../assets/leftArrow.svg';
import { AiOutlineUser } from 'react-icons/ai';


const ChatHeader = () => {
  return (
    <ChatHeaderWrapper>
        <img src={leftArrowIcon} alt="left arrow" className='left_arrow'/>
        <div className='avtar'>
            <AiOutlineUser/>
        </div>
        <text>Viren</text>
    </ChatHeaderWrapper>
  )
}

export default ChatHeader;

const ChatHeaderWrapper = styled.div`
background-color: rgb(0, 164, 189);
min-height:15%;
display:flex;
gap:10px;
align-items:center;
padding:0px 5px;

.left_arrow{
    height:30px;
    width:30px;
    color:white;
}

.avtar{
    background:grey;
    height:50px;
    width:50px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    svg{
        width:30px;
        height:30px;
    }
}

text{
    font-size:20px;
    font-weight:600;
}
`