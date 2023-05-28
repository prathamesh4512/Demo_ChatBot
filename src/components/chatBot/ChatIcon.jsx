import React from 'react'
import styled from 'styled-components';
import messageIcon from '../../assets/message.svg';
import crossIcon from '../../assets/cross.svg';


const ChatIcon = ({ showChatBox }) => {
    return (
        <ChatIconWrapper>
            {showChatBox ? <img src={crossIcon} alt="cross icon" className='chat-icon' />
                :
                <img src={messageIcon} alt="chat icon" className='chat-icon' />}
        </ChatIconWrapper>
    )
}

export default ChatIcon;

const ChatIconWrapper = styled.div`
background-color: rgb(0, 164, 189);
height:60px;
width:60px;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
cursor:pointer;
transition: transform 100ms ease-in-out 0s;

&:hover{
    transform: scale(1.1);
}

&:active{
    transform:scale(0.9);
}

.fadeOut{
    transition: transform 0.16s linear 0s, opacity 0.06s linear 0s;
    opacity: 0;
    transform: rotate(25deg) scale(0);
}

.fadeIn{
    transition: transform 0.16s linear 0s, opacity 0.06s linear 0s;
    opacity: 1;
    transform: rotate(0deg) scale(1);
}

.chat-icon{
    width:30px;
    height:30px;

    // &:hover{
    //     height:32px;
    //     width:32px;
    // }
}
`