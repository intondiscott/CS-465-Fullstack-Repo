const rooms = (req, res) =>
  res.render("rooms", { title: "Travlr Getaways", selected: { rooms: true } });

module.exports = { rooms };
