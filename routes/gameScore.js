const express = require('express');
const gameScore = require('../controllers/gameScore');
const catchAsync = require('../utils/catchAsync');
const router = express.Router();

router.get('/', catchAsync(gameScore.getScore));
router.post('/new', catchAsync(gameScore.addScore));
router.delete('/reset', catchAsync(gameScore.resetScore));

module.exports = router;