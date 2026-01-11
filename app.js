const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

let todos = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index", { todos });
});

app.post("/add", (req, res) => {
    todos.push(req.body.todo);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = req.body.index;
    todos.splice(index, 1);
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
