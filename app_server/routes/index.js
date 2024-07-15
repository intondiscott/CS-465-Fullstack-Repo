var express = require("express");
var router = express.Router();
const homePage = require("../controllers/main");
/* GET home page. */
router.get("/", homePage.index);

module.exports = router;
