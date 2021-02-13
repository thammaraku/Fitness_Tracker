// api-routes.js - this file offers a set of routes for displaying and saving data to the db

const db = require("../models");


module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            });
    });




};