const express = require("express");
const app = express();

app.post("/auth/login", function(req, res) {
  res.send("OK");
});

module.exports = {
  path: "/api/",
  handler: app
};