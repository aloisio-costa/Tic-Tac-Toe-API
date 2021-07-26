const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/tic-tac-toe', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open!")
    })
    .catch(err => {
        console.log("Mongo Connection Error!", err)
    })

const gameScoreRoute = require("./routes/gameScore");
app.use('/gameScore', gameScoreRoute);


app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went Wrong!";
    // res.status(statusCode).send(err.message);
    console.log("Error: ", err.message);
    res.status(statusCode).send('Something went wrong in the server');
})

app.listen(3001, () => {
    console.log("APP IS LISTENING ON PORT 3001!")
})