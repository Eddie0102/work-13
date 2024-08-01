const ws = require("ws");
const express = require("express");
const http = require("http");
const { Socket } = require("dgram");
const app = express();
const PORT = 8000;

// http 서버 연결
const server = http.createServer(app);
// 웹소켓과 연결
const wss = new ws.Server({ server: server });

// 미들웨어
app.set("view engine", "ejs");

// 라우터
app.get("/", (req, res) => {
  res.render("client");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

wss.on("connection", (socket) => {
  // socket 매개변수는 접속한 브라우저
  console.log("클라이언트가 연결되었습니다.");

  // 메세지 이벤트
  socket.on("message", (message) => {
    // 웹소켓을 통해 클라이언트와 서버간의 데이터를 주고 받을 때는 버퍼 형태로 전달됨
    // 버퍼를 쓰는 이유: 서버가 모두 다른 환경이기때문에 객체를 전달할때는
    // 객체를 일련의 바이트로 변한하는 직렬화 하는 과정이 필요,  버퍼를 환경과 무관하게 동일하기 떄문
    console.log(`back-msg`, JSON.parse(message));
    const msg = JSON.parse(message);
    // socket.send(`서버메세지: ${msg.message}`);
    // wss.clients: 접속한 클라이언트들
    wss.clients.forEach((value) => {
      value.send(`${msg.user}: ${msg.message}`);
    });
  });
  //   오류처리
  socket.on("error", (err) => {
    console.log("에러발생", err);
  });
  // 접속종료
  socket.on("close", () => {
    console.log("클라이언트가 종료하였습니다.");
  });
});
