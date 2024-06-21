import { KeyboardEvent, useEffect, useState } from 'react';
import { connect, sendMsg } from './api';
import Header from './components/header';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';

const App = () => {
  const send = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMsg(e.currentTarget.value);
      e.currentTarget.value = '';
    }
  };

  const [chatHistory, setChatHistory] = useState<MessageEvent[]>([]);

  useEffect(() => {
    connect((msg) => {
      setChatHistory((prev) => [...prev, msg]);
      console.log(chatHistory);
    });
  });

  return (
    <>
      <div className="App">
        <Header />
        <ChatHistory chatHistory={chatHistory} />
        <ChatInput send={send} />
      </div>
    </>
  );
};

export default App;
