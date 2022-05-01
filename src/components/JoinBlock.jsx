import React from 'react'
import socket from '../socket';

function JoinBlock() {
    return(
    <div className="join-block">
        <input type = "text" placeholder="ID комнаты" />
        <input type = "text" placeholder="пароль" />
        <button className = "btn btn-success">войти</button>
    </div>
    )
}
export default JoinBlock