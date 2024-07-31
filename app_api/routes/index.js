const express = require("express");
const router = express.Router();

//import api controller for trips
const { tripsList } = require("../controllers/trips");

//define route for the endpoint
router.get("/trips", tripsList); // GET:

module.exports = router;
