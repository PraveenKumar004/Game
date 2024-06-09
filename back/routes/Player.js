const express = require('express');
const router = express.Router();
const PlayerModel = require('../models/Player');
const GameModel = require('../models/Game');

router.get('/player/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const matchingPlayers = await PlayerModel.find({ mid: id });
        res.json(matchingPlayers);
    } catch (err) {
        console.log("Error in Player", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/playercreate', async (req, res) => {
    try {
        const { pid, password, name, mid, score } = req.body;
        const check = await PlayerModel.findOne({ pid });
        const matchingPlayers = await PlayerModel.find({ mid });
        const getlimit = await GameModel.findOne({ id: mid });
        console.log(getlimit.limit)
        if (matchingPlayers.length < getlimit.limit) {
            if (check) {
                res.json('Exist');
                console.log("not")
            } else {
                await PlayerModel.create({ pid, password, name, mid, score });
                res.json('done');
                console.log("done");
            }
        }
        else {
            res.json('limit')
        }

    } catch (error) {
        console.error('Error in Player Creation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/playerpassword', async (req, res) => {
    try {
        const { pid, password } = req.body;
        const check = await PlayerModel.findOne({ pid });
        if (check.password === password) {
            res.json('correct');
            console.log("Coorect password")
        } else {
            res.json('not');
            console.log("Wrong password")
        }
    } catch (error) {
        console.error('Error in Password:', error);
    }
})
router.post('/score/:id', async (req, res) => {
    const { id } = req.params;
    const { score } = req.body;

    await PlayerModel.findOneAndUpdate({ pid: id }, { score: score });

});

router.post('/deleteplayer/:id', async (req, res) => {
    try {
        const { id } = req.params;
        Player = await PlayerModel.findOneAndDelete({ pid: id });
        res.json('deleted');
    }
    catch (error) {
        console.error('Error in deleting games:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;