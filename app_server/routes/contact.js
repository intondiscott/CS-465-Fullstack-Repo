var express = require("express");
var router = express.Router();
var contactPage = require("../controllers/contact");

router.get("/", contactPage.contact);
module.exports = router;
