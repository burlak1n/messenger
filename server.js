const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const rooms = new Map();

app.use(express.json());

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

app.post("/rooms", (req, res) => {
  const { roomID, userName } = req.body;
  if (!rooms.has(roomID)) {
    rooms.set(
      roomID,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
});

server.listen(8888, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Сервер запущен!");
});
