require("dotenv").config();
const express = require("express");
// const multer = require("multer");
const db = require("./models");
const aws = require("aws-sdk"); //aws설정을 위한 모듈
// const multerS3 = require("multer-s3"); //aws s3에 파일을 업로드하기 위한 multer설정
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// // AWS설정
aws.config.update({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETKEY,
    region: "ap-northeast-2", 
  });
  // aws s3인스턴스 생성
  const s3 = new aws.S3();
  
//   // multer설정
//   const upload = multer({
//     storage: multerS3({
//       s3, //s3: s3
//       bucket: process.env.BUCKET,
//       acl: "public-read", //파일 접근 권한(public-read 로 해야 업로드된 파일이 공개)
//       metadata: function (req, file, cb) {
//         cb(null, { fieldName: file.fieldname });
//       },
//       key: function (req, file, cb) {
//         cb(null, Date.now().toString() + "-" + file.originalname);
//       },
//     }),
//   });

// 라우터
const router = require("./routes");
app.use("/", router);
app.get('/',(req,res)=>{
    res.render('index')
});

// app.post('/upload',upload.array('files'),(req,res)=>{
//     console.log(req.files);
//     res.send(req.files)
// })



db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
