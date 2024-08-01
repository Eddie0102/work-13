const http = require("http");
const express = require("express");
const socketIo = require("socket.io");

const app = express();
const PORT = 8000;

// http 서버연결
const server = http.createServer(app);

// socket 서버연결
const io = socketIo(server);

// view 엔진 세팅, ejs 설정
app.set("view engine", "ejs");

// 라우터
app.get("/chat", (req, res) => {
  res.render("chat");
});
// 채팅예제
io.on("connection", (socket) => {

  socket.on("hello", (arg) => {
    console.log('client: ',arg.button);
    socket.emit("hello_return", arg);
  });
  socket.on("study", (arg) => {
    console.log('client: ',arg.button);
    socket.emit("study_return", arg);
  });
  socket.on("bye", (arg) => {
    console.log('client: ',arg.button);
    socket.emit("bye_return", arg);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
