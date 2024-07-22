const express = require("express");
const db = require("./models");
const app = express();
const PORT = 8000;

// 세팅
app.set("view engine", "ejs");
app.use(express.json());

// 페이지 라우터
const pageRouter = require("./routes/page");
app.use("/", pageRouter);

// post 라우터

// api 라우터
const userRouter = require("./routes/user");
app.use("/api/user", userRouter);

// 404
app.use("*", (req, res) => {
  res.status(404).render("404");
});

// 테이블 싱크
// force: true 테이블을 삭제 후 재생성
// force: false(default) 테이블이 존재하면 패스, 없으면 생성
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
