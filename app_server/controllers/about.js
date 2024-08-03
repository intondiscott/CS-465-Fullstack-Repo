const about = (req, res) =>
  res.render("about", { title: "Travlr Getaways", selected: { about: true } });

module.exports = { about };
