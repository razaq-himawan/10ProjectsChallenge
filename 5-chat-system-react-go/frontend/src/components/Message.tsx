import { useState } from 'react';

const Message = ({ message }: { message: string }) => {
  let temp = JSON.parse(message);

  const [data] = useState({
    message: temp,
  });

  return (
    <>
      <div className="Message">{data.message.body}</div>
    </>
  );
};

export default Message;
