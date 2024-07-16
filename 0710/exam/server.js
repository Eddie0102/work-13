const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

const userRouter =require('./routes/user');

app.use('/',userRouter);



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
