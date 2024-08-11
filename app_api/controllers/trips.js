const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Model = mongoose.model("trips");

//Post Method to create records
const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description,
  });
  const q = await newTrip.save();
  if (!q) {
    return res.status(400).json(err);
  } else {
    return res.status(201).json(q);
  }
  console.log(q);
};

// PUT: /trips/:tripCode - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
  // Uncomment for debugging
  console.log(req.params);
  console.log(req.body);
  const q = await Model.findOneAndUpdate(
    { code: req.params.tripCode },
    {
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description,
    }
  ).exec();
  if (!q) {
    // Database returned no data
    return res.status(400).json(err);
  } else {
    // Return resulting updated trip
    return res.status(201).json(q);
  }
  // Uncomment the following line to show results of
  operation;
  // on the console
  // console.log(q);
};

//Get Method for all records /trips
const tripsList = async (req, res) => {
  const q = await Model.find({}).exec(); //return all
  if (!q) {
    return res.status(404).json({ error: error });
  } else {
    return res.status(200).json({ trips: q });
  }
};

//Get Method for one record /trips
const tripsFindByCode = async (req, res) => {
  const q = await Model.find({ code: req.params.tripCode }).exec(); //return one

  //debugging
  console.log(q);

  if (!q) {
    return res.status(404).json({ error: error });
  } else {
    return res.status(200).json(q);
  }
};

module.exports = { tripsList, tripsFindByCode, tripsAddTrip, tripsUpdateTrip };
