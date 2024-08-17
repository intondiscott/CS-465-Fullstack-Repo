const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken"); // Enable JSON Web Tokens
const { register, login } = require("../controllers/authentication");
//import api controller for trips
const {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
} = require("../controllers/trips");

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
  // console.log('In Middleware');
  const authHeader = req.headers["authorization"];
  // console.log('Auth Header: ' + authHeader);
  if (authHeader == null) {
    console.log("Auth Header Required but NOT PRESENT!");
    return res.sendStatus(401);
  }
  let headers = authHeader.split(" ");
  if (headers.length < 1) {
    console.log("Not enough tokens in Auth Header: " + headers.length);
    return res.sendStatus(501);
  }
  const token = authHeader.split(" ")[1];
  // console.log('Token: ' + token);
  if (token == null) {
    console.log("Null Bearer Token");
    return res.sendStatus(401);
  }
  // console.log(process.env.JWT_SECRET);

  // console.log(jwt.decode(token));
  const verified = jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err, verified) => {
      if (err) {
        return res.sendStatus(401).json("Token Validation Error!");
      }
      req.auth = verified; // Set the auth param to the decoded object
    }
  );
  next(); // We need to continue or this will hang forever
}

//define registration endpoint
router.post("/register", register);

// define route for login endpoint
router.post("/login", login);

//define route for the endpoint
router.get("/trips", tripsList).post("/trips", authenticateJWT, tripsAddTrip); // GET: ALL (1) POST: formData (2)

router
  .get("/trips/:tripCode", tripsFindByCode)
  .put("/trips/:tripCode", authenticateJWT, tripsUpdateTrip); // GET: ONE (1) PUT: ONE (2)

module.exports = router;
