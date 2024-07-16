const express = require('express');
const app = express();
const PORT = 8000;

// 세팅
app.set('view engine','ejs');
app.use(express.json());

// 라우터



// 404
app.use('*',(req,res)=>{
    res.render('404');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});