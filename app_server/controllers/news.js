var fs = require("fs");
var newsInfo = JSON.parse(fs.readFileSync("./data/newsInfo.json", "utf8"));

const news = (req, res) =>
  res.render("news", { title: "Travlr Getaways", newsInfo });

module.exports = { news };
