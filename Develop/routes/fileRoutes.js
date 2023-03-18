const express = require("express");
var router = express.Router();
const path = require('path');

//go to notes HTML
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

//go to home page for anything else
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;