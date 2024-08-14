//var fs = require("fs");
//var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
  method: "GET",
  headers: {
    "content-type": "application/json",
  },
};

const travel = async (req, res, next) => {
  await fetch(tripsEndpoint, options)
    .then((data) => data.json())
    .then((json) => {
      let message = null;
      if (!(json.trips instanceof Array)) {
        message = "API lookup error";
        json.trips = [];
      } else {
        if (!json.trips.length) {
          message = "No trips exist in our database!";
        }
      }
      res.render("travel", {
        title: "Travlr Getaways",
        trips: json.trips,
        message,
        selected: { travel: true },
      });
    })
    .catch((err) => res.status(500).send(err.message));
};

module.exports = { travel };
