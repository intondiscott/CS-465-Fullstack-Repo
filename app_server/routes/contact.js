var express = require("express");
var router = express.Router();
var { contact } = require("../controllers/contact");

router.get("/", contact);
module.exports = router;
