const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Model = mongoose.model("trips");

//Get Method for /trips
const tripsList = async (req, res) => {
  const q = await Model.find({}).exec(); //return all

  //debugging
  console.log(q);

  if (!q) {
    return res.status(404).json({ error: error });
  } else {
    return res.status(200).json({ trips: q });
  }
};

module.exports = { tripsList };
