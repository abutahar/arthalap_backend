const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieparser = require("cookie-parser");
const mongodb = require("mongodb");

// env load
dotenv.config();

const port = process.env.PORT || 5000;

// files include
const { addPost, blogs } = require("./src/handlers/Handlers.js");

// server run
const arthalapServer = express();

// load cors
arthalapServer.use(cors());

// define routes
arthalapServer.get("/", (req, res) => {
  res.json("hurray its working");
});
arthalapServer.get("/posts", blogs);
arthalapServer.get("/addPost", addPost);

// start server at port
arthalapServer.listen(port, () => {
  console.log(`its stared listening to the port: ${port}`);
});
