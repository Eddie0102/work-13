const express = require("express"); //Express 모듈을 가져와서 express 변수에 할당
const app = express(); //Express애플리케이션을 생성하고, 그 인스턴스를 app변수에 할당
const PORT = 8000;

// view 엔진 세팅, ejs 설정
//Express의 view엔진을 설정, ejs설정을 통해 서버측에서 동적인 HTML을 생성할수 있음
app.set("view engine", "ejs");
//Express 내장 미들웨어, http요청의 본문(body)를 파싱하여 JS 객체로 만들어주는 역할 >> 클라이언트가 json 형식으로 데이터를 전송하면 이를 JS객체로 쉽게 변환, 사용 가능
app.use(express.json());

// 라우터
// page(프론트)
const pageRouter = require("./routes/page");
app.use("/", pageRouter);
// api(서버)
const userRoter = require("./routes/user");
app.use("/api/user", userRoter);

// 404page
app.use("*", (req, res) => {
  res.render("404");
});

// express의 listen메서드를 호출하여 애플리케이션이 해당포트에서 HTTP요청을 수신하도록 설정
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
