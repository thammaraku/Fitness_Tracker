
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

// const databaseUrl = "fitness";
// const collections = ["workouts"];
// const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static directory
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));


app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});