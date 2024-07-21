const main = (req, res) => {
  res.render("index");
};
const signup = (req, res) => {
  res.render("signup");
};
module.exports = { main, signup };
