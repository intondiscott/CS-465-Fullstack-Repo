const express = require("express");
const router = express.Router();

//import api controller for trips
const {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
} = require("../controllers/trips");

//define route for the endpoint
router.get("/trips", tripsList).post("/trips", tripsAddTrip); // GET: ALL (1) POST: formData (2)

router
  .get("/trips/:tripCode", tripsFindByCode)
  .put("/trips/:tripCode", tripsUpdateTrip); // GET: ONE (1) PUT: ONE (2)

module.exports = router;
