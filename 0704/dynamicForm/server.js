const express = require('express');
const app = express();
const PORT = 8000;

//body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//view 엔진
app.set('view engine', 'ejs');
//views로 하니까 폴더명 생략

// router
app.get('/', (req, res) => {
    res.render('index');
})
// 복습
/*
    * render(): 뷰 페이지 렌더링, render(뷰 페이지 이름, 데이터(선택))
    * send(): 모든 타입 데이터 전송(문자열,배열, 객체, 숫자)
    * json(): 객체 타입 데이터 전송
*/



// 요청과 응답
// ajax

app.get('/ajax', (req, res) => {
    console.log('요청값: ', req.query);
    const { name, email } = req.query;
    // 응답 데이터(프론트로 보내는 데이터)
    res.send({ user: `${name}`, email: ` ${email}` });
})

app.post('/ajax', (req, res) => {
    console.log('요청값: ', req.body);
    const { name, email } = req.body;
    const data = {
        user: `${name}님`,
        email: `이메일주소는 ${email}`,
    };
    res.send({ user: `${name}`, email: ` ${email}` });
})
// app.뒤에 post,get,use,fetch등 뒤에 url이 달라져도 되는 이유??
// 반대로 원래는 다른이유?



// 
// axios
app.get('/axios', (req, res) => {
    console.log('요청값: ', req.query);

    const { name, email } = req.query;
    const data = {
        result: true,
        name,
        email,
    }
    res.json(data);
})
app.post('/axios', (req, res) => {
    console.log('요청값: ', req.body);
    const { name, email } = req.body;
    const data = {
        result: true,
        name,
        email,
    }
    res.json(data);
})

app.get('/fetch',(req,res)=>{
    console.log('요청값: ',req.query); 
    const { name, email } = req.query;
    const data = {
        result: true,
        name,
        email,
    }
    res.json(data);
})

app.post('/fetch', (req, res) => {
    console.log('요청값: ', req.body);
    const { name, email } = req.body;
    const data = {
        result: true,
        name,
        email,
    }
    res.json(data);
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})