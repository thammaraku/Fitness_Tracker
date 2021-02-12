const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: String,
    name: String,
    duration: Integer,
    weight: Integer,
    reps: Integer,
    sets: Integer,
    distance: Integer,

});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;