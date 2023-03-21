const express = require("express");
const fs = require("fs");
//creates new unique ID
var uniqid = require("uniqid");
var router = express.Router();

router.get('/notes', (req, res) => {
    //read file
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        //if error then display err
        if (err) {
            console.log(err)
        } 
        else {
            //display data from file
           res.json(JSON.parse(data)) 
        }
    })
});

router.post('/notes', (req, res) => {
    let db = fs.readFileSync("./db/db.json");
    db = JSON.parse(db);
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        // creating unique id for each note
        id: uniqid(),
    };
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
});

router.delete('/notes/:id', (req, res) => {
    const db = JSON.parse(fs.readFileSync("./db/db.json"));
    //collect everything except note with ID we want to delete
    const deleteNote = db.filter(item => item.id !== req.params.id);
    // update file based on note we took out
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
});

module.exports = router;