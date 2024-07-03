const express = require('express');
const app = express();
const PORT = 8000;
// -----최상단



// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views');
// (키값, 키에 해당하는 밸류값)
// views에 넣는 것이 default값이므로 변경 사항이 없으면 생략가능
// Path 로 경로를 작성방법
// const path =require('path');
// app.set('views',path.join__dirname,'template');
// 정적파일 세팅
app.use('/public',express.static(__dirname +'/public'))
// 시간 출력
app.use((req,res,next)=>{
    console.log('Time: ',Date.now());
    next();
});


// 도메인 설정 (= 라우터)
//  '/'는 http://localhost:8000 임
app.get('/', (req, res) => {
    res.send( "KDT 13기" );
    // 객체 형태도 OK, 문자열도 OK 응답 데이터 일뿐
})

app.get("/kdt", (req, res) => {
    // "/kdt" 는  http://localhost:8000/kdt 임
    res.render("test", { age: 20 });
    // render는 view 템플릿 렌더링(?)
    // 템플릿 이름과 렌더링 이름 동일해야함.
    // 뒤의 데이터는 보내도 되고 안보내도 됨.
});

//  "/gugu"
app.get("/gugu",(req,res)=>{
    res.render("gugudan",({dan: 1, leng:[1,2,3,4,5,6,7,8,9]}));
})
app.get('/fruit',(req,res)=>{
    res.render("fruit",{fruit:[
        {name: 'apple',kor: '사과'},
        {name: 'banana',kor: '바나나'},
        {name: 'peach',kor: '복숭아'},
        {name: 'melon',kor: '메론'},
    ]})
})

app.listen(PORT ,()=>{
    console.log(`http://localhost:${PORT}`);
});