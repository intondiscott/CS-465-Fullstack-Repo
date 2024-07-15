var express = require("express");
var router = express.Router();
var aboutPage = require("../controllers/about");

router.get("/", aboutPage.about);
module.exports = router;
