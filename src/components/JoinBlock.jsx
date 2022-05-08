import React from "react";
import axios from "axios";

function JoinBlock({ onLogin }) {
  const [roomID, setRoomID] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const onEnter = async () => {
    if (!roomID || !userName) {
      return alert("Введите данные");
    }
    setLoading(true);
    await axios.post("rooms", {
      roomID,
      userName,
    });
    onLogin();
  };
  return (
    <div className="join-block">
      <input
        class="text-field__input unselectable"
        type="text"
        placeholder="логин"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <input
        class="text-field__input unselectable"
        type="text"
        placeholder="пароль"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <a
        disabled={isLoading}
        onClick={onEnter}
        class="floating-button unselectable"
      >
        {isLoading ? "ВХОД..." : "ВОЙТИ"}
      </a>
    </div>
  );
}
export default JoinBlock;
