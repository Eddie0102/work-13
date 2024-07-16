const express = require('express');
const app = express();
const PORT = 8000;

// 설정과 미들웨어
app.set('view engine','ejs');
app.use(express.json());


// 라우터
const userRouter = require('./routes/user');
app.use('/user',userRouter);

// app.use('*',(req,res)=>{
//     res.render('404');
// })



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})