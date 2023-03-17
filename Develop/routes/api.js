const express = require("express");
var router = express.Router();

const notes = [
    {
        "title":"Test Title",
        "text":"Test text"
    }
];

router.get('/notes', (req, res) => {
    res.json(notes)
});

router.post('/notes', (req, res) => {
    const id = req.params.id;
});

router.post('/notes/:id', (req, res) => {
    const id = req.params.id;
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
});

module.exports = router;