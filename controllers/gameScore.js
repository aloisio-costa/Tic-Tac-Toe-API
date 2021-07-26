const GameScore = require('../models/gameScore');

module.exports.getScore = async (req, res) => {
    const winsX = await GameScore.find({ "winner": "X" });
    const winsO = await GameScore.find({ "winner": "O" });
    const totalWins = [winsX.length, winsO.length];

    console.log("x: ", totalWins);
    res.status(200).send(totalWins);
}

module.exports.addScore = async (req, res) => {
    console.log("body:", req.body)
    const gameScore = new GameScore(req.body);
    await gameScore.save();

    res.status(200).send('Game result saved sucessfully');
}

module.exports.resetScore = async (req, res) => {
    await GameScore.deleteMany({});
    res.status(200).send("Score has been reset")
}

