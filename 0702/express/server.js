const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views'); //뷰 파일들의 위치를 알려줌(명시적 경로)
// 뷰 파일을 views 폴더에 넣을 때는 생략이 가능함.

/*
// << views 폴더 외 지정하고 싶을 때 >>
// app.set("views","template")//생략 불가
// const path = require('path');
// app.set('views',path.join(__dirname,'template'));
*/

app.get('/',(req,res)=>{
    res.send("World Class Son");
})
app.get('/test',(req,res)=>{
    res.render('test',{name:'손흥민'});
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});