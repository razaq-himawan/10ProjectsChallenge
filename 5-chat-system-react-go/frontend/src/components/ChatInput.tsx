import { KeyboardEvent } from 'react';

function ChatInput({
  send,
}: {
  send: (e: KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <div className="ChatInput">
        <input
          type="text"
          onKeyDown={send}
        />
      </div>
    </>
  );
}

export default ChatInput;
