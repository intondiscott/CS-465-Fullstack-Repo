var express = require("express");
var router = express.Router();
var newsPage = require("../controllers/news");

router.get("/", newsPage.news);
module.exports = router;
