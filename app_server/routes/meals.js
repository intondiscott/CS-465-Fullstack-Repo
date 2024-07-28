var express = require("express");
var router = express.Router();
var mealsPage = require("../controllers/meals");

router.get("/", mealsPage.meals);
module.exports = router;
