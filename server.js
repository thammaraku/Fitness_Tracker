
const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "fitness";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
    console.log("Database Error:", error);
});


app.get("/api/workouts", (req, res) => {

    db.workouts.findAll ({}, (error, data) => {

        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });


});




app.listen(3000, () => {
    console.log("App running on http://localhost:3000");
});