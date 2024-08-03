// Get Home Page
const index = (req, res) =>
  res.render("index", { title: "Travlr Gataways", selected: { index: true } });
module.exports = { index };
