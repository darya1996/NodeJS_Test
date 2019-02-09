const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const config = require("./config");

//const data = 'Hi';
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
const arr = ["hello", "world", "test"];
//app.get('/', (req, res) => res.send('Hello, Daria'));
app.get("/", (req, res) => res.render("index", { arr: arr }));
app.get("/create", (req, res) => res.render("create"));
app.post("/create", (req, res) => {
  arr.push(req.body.text);
  res.redirect("/");
});

app.listen(config.PORT, () =>
  console.log(`Example app listening on port ${config.PORT}!`)
);
