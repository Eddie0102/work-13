const fs = require('fs');

//파일쓰기
// sync를 넣어서 동기방식으로 처리 가능
// fs.writeFile ('file.txt','Hello world',(err)=>{
//     if(err) throw err;
//     console.log('저장완료');
// })

// 파일 읽기
fs.readFile("file.txt","UTF8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})
