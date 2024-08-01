const express = require('express');
const app = express();
const PORT = 8000;


// 세팅, 미들웨어 설정
app.set('view engine', 'ejs');
app.use(express.json());

const userRouter = require('./routes/user')
app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`https://localhost:${PORT}`)
});