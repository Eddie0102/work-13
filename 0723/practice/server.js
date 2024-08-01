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
app.get("/", (req, res) => {
  res.render("client");
});

// socket 통신
io.on("connection", (socket) => {
  socket.on("hello", (arg) => {
    console.log("client: ", arg.message);
    socket.emit('rtHello',{message:'안녕하세요'})
  });
  socket.on("study", (arg) => {
    console.log("client: ", arg.message);
    socket.emit('rtstudy',{message:'공부합시다'})
  });
  socket.on("bye", (arg) => {
    console.log("client: ", arg.message);
    socket.emit('rtbye',{message:'잘가세요~'})
  });
});

// 서버
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
