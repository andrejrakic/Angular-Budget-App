"use strict";
exports.__esModule = true;
var express = require("express");
var port = 5000;
var app = express();
var add = function (a, b) { return a + b; };
app.get("/", function (req, res, next) {
    console.log(add(5, 5));
    res.send("Hello from Typescript + Node & Express server");
});
app.listen(port, function () {
    return console.log("Server is up and running on http://localhost:" + port);
});
