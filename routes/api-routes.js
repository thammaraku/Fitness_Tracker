// api-routes.js - this file offers a set of routes for displaying and saving data to the db

const db = require("../models");
const router = require("express").Router();

// get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
});

module.exports = router;

