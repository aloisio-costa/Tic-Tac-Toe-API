const mongoose = require('mongoose');

const gameScoreSchema = new mongoose.Schema({
    winner: {
        type: String,
        required: true,
        enum: ['X', 'O']
    }
})

const gameScore = mongoose.model('gameScore', gameScoreSchema);

module.exports = gameScore;