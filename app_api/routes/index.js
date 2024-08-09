const express = require("express");
const router = express.Router();

//import api controller for trips
const { tripsList, tripsFindByCode } = require("../controllers/trips");

//define route for the endpoint
router.get("/trips", tripsList); // GET: ALL

router.get("/trips/:tripCode", tripsFindByCode); // GET: ONE

module.exports = router;
