const meals = (req, res) =>
  res.render("meals", { title: "Travlr Getaways", selected: { meals: true } });

module.exports = { meals };
