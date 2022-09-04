'use strict';

const express = require('express');
const cors = require('cors');
const { response } = require('express');
require('dotenv').config();
const mongoose = require('mongoose'); // 0 - import mongoose


const app = express();
app.use(cors());
//IP : http://localhost:PORT

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost:27017/bookapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let getBookHandler = require("./book");

// seedData();
// Routes
app.get("/book", getBookHandler  );
app.get("/", homeHandler);
app.get("/test", (req, res) => {
  res.send("test request received");
});
app.get("*",defualtHandler);

// http://localhost:3010/
function homeHandler(req,res) {
  res.send("Hi from the home route");
}
// http://localhost:3010/*
function defualtHandler(req,res) {
  res.send("Sorry, Page not found");
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
