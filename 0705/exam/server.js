const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

//router
//=======페이지

const postRouter =require('./routes/post');
app.use('/',postRouter);

app.get('/', (req, res) => {
    res.render('index');
});
app.use('/post', (req, res) => {
    res.render('post');
});

//=======데이터 요청, 응답
app.post('/resultPost', (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (id === reqId && pw === reqPw) {
        res.json({ result: true, userId: id });
    } else {
        res.json({ result: false, userId: null });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
