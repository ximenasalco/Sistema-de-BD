// app.js
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(bodyParser.urencoded({extended:true}));

// Sample data
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "1984", author: "George Orwell" },
];

// Route for the home page
app.get("/", (req, res) => {
  res.render("index", { books: books });
});

app.post("/nuevo-libro",(req, res) =>{
  const newbook = {title: req.body.title, author: req.body.author};
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
