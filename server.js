// Initialize & Configure Server
const express = require("express");
const path = require("path");
const server = express();
server.use(express.json());
server.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:500000}));

// Import Controllers
const constroller = require("./routes/controller");

// Configure Routes
server.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

server.use("/api/controller", controller);


// Listening 
server.listen("8101", function () {
  console.log("Server running");
});