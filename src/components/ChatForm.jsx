import React, { useRef } from 'react';
export default function ChatForm({ chatHistory, setChatHistory, generateResponse }) {
  const inputRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = '';

    // Add user Message
    setChatHistory((prev) => [...prev, { role: 'user', text: userMessage }]);

    // bot thinking then response user question
    setTimeout(()=>setChatHistory((prev) => [...prev, { role: 'model', text: 'Thinking...' }]),300);

    // bot response according to user A to Z question related Programming
    generateResponse([...chatHistory, { role: 'user', text:userMessage }]);

    // when u specific response create file company information import module then user type keyword provide answer chatbot 
    // generateResponse([...chatHistory, { role: 'user', text:`Using the details provided above,please address this query: ${userMessage}` }]);
  }

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
}
