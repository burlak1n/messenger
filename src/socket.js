import io from 'socket.io-client';
// "proxy": "http://localhost:8888",
const socket = io('ws://localhost:8888');

export default socket;