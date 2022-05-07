import React from "react";
import axios from "axios";
import socket from "../socket";

function JoinBlock() {
  const [roomID, setRoomID] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const onEnter = () => {
    if (!roomID || !userName) {
      return alert("Введите данные");
    }
    axios.post("rooms", {
      roomID,
      userName,
    });
  };
  return (
    <div className="join-block">
      <input
        type="text"
        placeholder="логин"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <input
        type="text"
        placeholder="пароль"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={onEnter}>ВОЙТИ</button>
    </div>
  );
}
export default JoinBlock;
