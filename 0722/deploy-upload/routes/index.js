const express = require("express");
const { main, uploadFunc } = require("../controller/index");
const router = express.Router();

// 페이지
router.get("/", main);

// api upload
router.post("/upload", uploadFunc);

module.exports = router;
