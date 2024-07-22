const express = require("express");
const { main, post, signup } = require("../controller/page");
// controller에서 내보내주는 모듈을 사용

const router = express.Router();

router.get("/", main);
router.get("/post", post);
router.get("/signup", signup);
router.get()

module.exports = router;
