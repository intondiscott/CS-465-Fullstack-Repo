const contact = (req, res) =>
  res.render("contact", {
    title: "Travlr Getaways",
    selected: { contact: true },
  });

module.exports = { contact };
