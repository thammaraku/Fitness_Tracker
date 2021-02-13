// html-routes.js - this file offers a set of routes for sending users to the various html pages

var path = require("path");

module.exports = function(app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });


    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname,"../public/exercise.html"));
    });


    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

};