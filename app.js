const express = require("express");
const bodyParser = require("body-parser");

const Post = require("./models/post");

const app = express();
//const data = 'Hi';
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//const arr = ["hello", "world", "test"];
app.get("/", (req, res) => {
  Post.find({}).then(posts => {
    res.render("index", { posts: posts });
  });
});
//app.get('/', (req, res) => res.send('Hello, Daria'));
//app.get("/", (req, res) => res.render("index", { arr: arr }));
app.get("/create", (req, res) => res.render("create"));

app.post("/create", (req, res) => {
  // реструктуризация
  const { title, body } = req.body;
  // запись в базу даных
  Post.create({
    title: title,
    body: body
  }).then(post => console.log(post.id));

  res.redirect("/");
});

/*app.listen(config.PORT, () =>
  console.log(`Example app listening on port ${config.PORT}!`)
);*/

module.exports = app;
