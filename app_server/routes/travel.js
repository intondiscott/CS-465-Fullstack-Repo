var express = require("express");
var router = express.Router();
var travelPage = require("../controllers/travel");

router.get("/", travelPage.travel);
module.exports = router;
