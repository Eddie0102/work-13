const express = require("express");
const { waiting, main, user, login } = require("../controller/page");
const router = express.Router();

router.get("/", main);
router.get("/user", user);
router.get("/login", login);

router.get("/waiting", waiting);
module.exports = router;
