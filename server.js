const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB config
const db = require("./src/config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 6969;

app.listen(port, () => console.log(`server listening on port ${port}`));
