// api-routes.js - this file offers a set of routes for displaying and saving data to the db

const db = require("../models");
const router = require("express").Router();

// get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        // res.json(dbWorkout);

        dbWorkout.forEach(workout => {
            var total = 0;
            workout.exercises.forEach(eachDuration => {
                total += eachDuration.duration;
            });
            workout.totalDuration = total;

        });

        res.json(dbWorkout);

    }).catch(error => {
        res.json(error);
    });
});


// createWorkout
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(error => {
        res.json(err);
    });
});


// addExercise request is sent through request parameter
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        //filter
        { _id: req.params.id },
        // update
        {
            // inc operator to add duration
            $inc: { totalDuration: req.body.duration },
            // push operator to append new exercise
            $push: { exercises: req.body }
        },
        { new: true }).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(error => {
            res.json(err);
        });

});

module.exports = router;

