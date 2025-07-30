// server.js
const express = require('express');
const app = express();

// --> 7) Mount the Logger middleware here

// --> 11) Mount the body-parser middleware here

/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
app.get("/", function(req, res) {
  res.send('Hello Express');
});

/** 3) Serve an HTML file */
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/views/index.html");
// });

/** 4) Serve static assets  */
// app.use("/public", express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route */
// app.get("/json", (req, res) => {
//   res.json({"message": "Hello json"});
// });

/** 6) Use the .env file to configure the app */

// Listen
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

module.exports = app;
