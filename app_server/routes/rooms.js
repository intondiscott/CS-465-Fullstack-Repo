var express = require("express");
var router = express.Router();
var roomsPage = require("../controllers/rooms");

router.get("/", roomsPage.rooms);
module.exports = router;
