var express = require("express");
var router = express.Router();

const messages = [
  {
    title: "Obi Wan is the goat!",
    text: "Hello There!",
    user: "John Doe",
    added: new Date(),
  },
  {
    title: "Kenobi is the worst!",
    text: "General Kenobi, You Are A Bold One.",
    user: "John Smith",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* Get new message page */
router.get("/new", (req, res, next) => {
  res.render("form", { title: "Add a new message" });
});

/* Post a new message */
router.post("/new", (req, res, next) => {
  const data = req.body;
  console.log(data);
  // // create a new message
  const newMessage = {
    title: data.title,
    text: data.message,
    user: data.username,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect("/"); // redirect the user to the homepage
});

module.exports = router;
