const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("WooHoo! Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hi World"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
app.listen(port, () => console.log(`Server is running on port ${port}`));