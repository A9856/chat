import React from 'react'
import ChatbotIcon from './ChatbotIcon'

export default function ChatMessage({chat}) {
    return (
        // company information then all code execute without comment all line
        // !chat.hideInChat &&(
        <div className={`message ${chat.role==="model"?'bot':'user'}-message ${chat.isError?"error":""}`}>
            {chat.role==="model"&&<ChatbotIcon/>}
            <p className={`message-text ${chat.isError ? 'error-text' : ''}`}>
               {chat.text}
            </p>
        </div>
        // )
    )
}

  
