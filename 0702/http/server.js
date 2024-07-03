const http = require('http')//common js 방식
//import http from 'http' //es6

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.write('<h1>Hello wo</h1>');
    res.end("<p>END</p>");
})

// on: server 객체에 이벤트를 등록
server.on('request',()=>{
    console.log('요청 이벤트');
})
server.on('connect',()=>{
    console.log('접속 이벤트');
})
// listen: server 를 실행
server.listen(8000,()=>{
    console.log('http://localhost:8000');
})