const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    day: {
        type: Date,
    },
    exercises: [
        {
        type: Schema.Types.ObjectId,
        ref: "Workout"
        }
    ]

});

const User = mongoose.model("User", UserSchema);
module.exports = User;