const express = require('express');
const app = express();
const PORT = 8000;


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({extended: true}));
// get방식
// app.get('/',(req,res)=>{
//     res.render('form');
// })
// t56
app.get('/',(req,res)=>{
    res.render('form2');
});

// get 방식
// app.get('/getForm',(req,res)=>{
//     console.log(req.query);
//     res.render('result',{title: '개인정보',userInfo:req.query});
// })
// post 방식
app.post('/postForm',(req,res)=>{
    console.log(req.body);
    res.render('result2',{title: '개인정보',userInfo:req.body});
})


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})