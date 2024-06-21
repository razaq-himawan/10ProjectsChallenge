import Message from './Message';

const ChatHistory = ({ chatHistory }: { chatHistory: MessageEvent[] }) => {
  const messages = chatHistory.map((msg, i) => {
    return (
      <Message
        key={i}
        message={msg.data}
      />
    );
  });

  return (
    <>
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {messages}
      </div>
    </>
  );
};

export default ChatHistory;
