const express = require('express');
const router = express.Router();
const GameModel = require('../models/Game');
const PlayerModel = require('../models/Player');
const WinnerModel = require('../models/Winner');

router.post('/create', async (req, res) => {
    try {
        const { id, password, limit } = req.body;
        const check = await GameModel.findOne({ id });
        if (check) {
            res.json('Exist');
            console.log("not create")
        } else {
            await GameModel.create({ id, password, limit });
            res.json('done');
            console.log("done")
        }
    } catch (error) {
        console.error('Error in Game Creation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/contestlog', async (req, res) => {
    try {
        const { id, password, limit } = req.body;
        const check = await GameModel.findOne({ id });
        if (check) {
            res.json('Exist');
            console.log("not")
        } else {
            res.json('done');
            console.log("done")
        }
    } catch (error) {
        console.error('Error in Game Creation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await GameModel.findOneAndDelete({id});
        await PlayerModel.deleteMany({mid:id});
        await WinnerModel.findOneAndDelete({mid:id});
        res.json('deleted');
        console.log("Games deleted successfully");
    } catch (error) {
        console.error('Error in deleting games:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;