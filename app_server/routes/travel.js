var express = require("express");
var router = express.Router();
var { travel } = require("../controllers/travel");

router.get("/", travel);
module.exports = router;
