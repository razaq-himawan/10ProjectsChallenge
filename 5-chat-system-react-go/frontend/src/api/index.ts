const socket = new WebSocket('ws://localhost:8080/ws');

let connect = (fn: (msg: MessageEvent) => void) => {
  console.log('Attempting Connection...');

  socket.onopen = () => {
    console.log('Successfully Connected');
  };

  socket.onmessage = (msg: MessageEvent) => {
    console.log(msg);
    fn(msg);
  };

  socket.onclose = (e) => {
    console.log('Socket Closed Connection: ', e);
  };

  socket.onerror = (err) => {
    console.log('Socket Error: ', err);
  };
};

let sendMsg = (msg: string | ArrayBuffer | Blob | ArrayBufferView) => {
  console.log('sending msg: ', msg);
  socket.send(msg);
};

export { connect, sendMsg };
