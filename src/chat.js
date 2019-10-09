import React from 'react';
import Store from './list-store';


function Chat(props) {
    const defaultContent = (
        <span>{props.name} {props.type}</span>
    )

    const date = new Date(props.time)
    const messageContent = (
        <div className="message-content">
            <img src={Store.participants.find(item => item.id === props.participantId).avatar} alt="avatar" />
            <span>{props.name} {date.toString()}</span>
            <p>{props.message}</p>
        </div>
    )
    
    return (
        <div className="chat-item">
            {(props.type === 'message') ? messageContent : defaultContent}
        </div>
    )
}

export default Chat;