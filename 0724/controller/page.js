const main = (req, res) => {
  res.render("index");
};
const waiting = (req, res) => {
  res.render("waiting");
};
const user = (req, res) => {
  res.render("user");
};
const login = (req, res) => {
  res.render("login");
};
module.exports = { main, waiting ,user,login};
