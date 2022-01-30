import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function App() {
  const connect = () => {
    const socket = io('http://localhost:9000');
  };

  useEffect(() => {
    connect();
  }, []);
  return <div>PWF</div>;
}

export default App;
