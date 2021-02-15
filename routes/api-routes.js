// api-routes.js - this file offers a set of routes for displaying and saving data to the db

const db = require("../models");
const router = require("express").Router();

// get all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        // res.json(dbWorkout);
        // console.log(dbWorkout);
        dbWorkout.forEach(workout => {
            // console.log("workout = " + workout);
            console.log("workout.exercises = " + workout.exercises);
            var total = 0;
            workout.exercises.forEach(objProp => {
                console.log("objProp = " + objProp);
                total += objProp.duration;
                console.log("total = " + total);
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
        //filter argument
        { _id: req.params.id },
        // update argument
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

// send to stat route
router.get("/api/workouts/range", (req, res) => {

    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(error => {
        res.json(err);
    })
})

module.exports = router;

