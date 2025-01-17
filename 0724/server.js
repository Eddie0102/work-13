const express = require("express");
const db = require("./models");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.json());

// 라우터

// 페이지
const pageRouter = require("./routes/page");
app.use("/", pageRouter);

// api-고객
const userRouter = require("./routes/user");
app.use("/api/user", userRouter);

// 404
app.use("*", (req, res) => {
  res.status(404).send("페이지를 찾을 수 없습니다.");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
