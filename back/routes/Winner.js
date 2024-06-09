const express = require('express');
const router = express.Router();
const WinnerModel = require('../models/Winner');

router.post('/winner/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { pid, score, mid,name } = req.body;
        const check = await WinnerModel.findOne({id});
        if (check) {
            res.json('Exist');
            console.log("not")
        } else {
            await WinnerModel.create({ pid, score, mid,name });
            res.json('done');
            console.log("done")
        }
    } catch (error) {
        console.error('Error in Game Creation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/winnershow/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const matchingPlayers = await WinnerModel.find({mid:id});
        res.json(matchingPlayers);
    } catch(err) {
        console.log("Error in Player", err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;