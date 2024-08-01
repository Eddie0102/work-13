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
// 사용자 정보를 갱신 해주는 함수
function getUserLIst(room) {
  // 룸에 접속한 모든 사용자
  const users = [];
  console.log(io.sockets);
  // 채팅룸에 접속한 socket.id 값을 찾음
  const clients = io.sockets.adapter.rooms.get(room);
  console.log("클라이언트", clients);

  if (clients) {
    clients.forEach((client) => {
      console.log("client", client);
      // io.sockets.sockets: socket.id가 할당한 변수들의 객체 값
      const userSocket = io.sockets.sockets.get(client);
      const info = { userName: userSocket.userName, key: client };
      users.push(info);
    });
  }
  return users;
}
// socket
const roomList = [];
io.on("connection", (socket) => {
  io.emit("roomList", roomList);
  // 웹브라우저가 접속이 되면 고유한 id값이 생성됨 socket.id로도 확인가능
  console.log(socket.id);

  socket.on("create", (arg) => {
    // console.log(arg.roomName);
    // join(방이름): 방만들기
    socket.join(arg.roomName);
    // socket객체 안에 워하는 값 할당 가능
    socket.roomName = arg.roomName;
    socket.userName = arg.userName;
    // 나를 제외한 모든 사람들에게 전달
    socket
      .to(arg.roomName)
      .emit("notice", `${arg.userName}님이 입장하셨습니다`);
    // 채팅방 목록 갱신

    if (!roomList.includes(arg.roomName)) {
      roomList.push(arg.roomName);
      //   갱신됐을때 목록을 클라이언트로 전달, 전체가 봐야함
      //   io.emit("roomList", roomList);
    }
    // 사용자 정보갱신
    const userList = getUserLIst(arg.roomName);
    io.to(arg.roomName).emit("userList", userList);
    // if (userList.includes(socket.id)) {
    //   const info = { userName: arg.userName, key: socket.id };
    //   userList.push(info);
    // }
  });

  socket.on("sendMessage", (arg) => {
    // console.log(arg)
    const { userName, message, select } = arg;
    if (select == "all") {
      // io.to(방 id) 방 id에 있는 모든 사람에게 메세지 보내기
      io.to(socket.roomName).emit("newMessage", {
        userName,
        message,
        dm: flase,
      });
    } else {
      io.to(socket).emit("newMessage", {
        userName,
        message,
        dm: true,
      });
      // 자기 자신에게 메세지 보내기
      socket.emit("newMessage", { message, userName, dm: true });
    }
  });
});

// 서버
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
