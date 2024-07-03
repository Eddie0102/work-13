const express = require('express');
const app = express();
const PORT = 8000;


// 뷰 엔진(큰 범주에서는 미들웨어)
app.set('view engine','ejs');
app.set('views','./views');
//미들웨어
app.use(express.urlencoded({extended: true}));
// extended:true >>qs 모듈 사용 body데이터를 해석
// extended:false >>내장된 querystring모듈을     사용



// 라우터
app.get('/',(req,res)=>{
    res.render('form');
});

// app.get('/form',(req,res)=>{
//     res.render('index');
// })
app.get('/getForm',(req,res)=>{
    console.log(req.query);
    res.render('result',{title:'get요청 결과', userInfo: req.query});
})
// post방식일때
app.post('/postForm',(req,res)=>{
    console.log(req.body);
    res.render('result',{title:'post요청 결과', userInfo: req.body});
})


//서버실행
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})