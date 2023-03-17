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
    //read file
    let db = fs.readFileSync("./db/db.json");
    db = JSON.parse(db);
    res.json(db);
    //take contents of file
    //add my body data and id
    var newNote = {
        title: req.body.title,
        text: req.body.text,
        // creating unique id for each note
        id: uniqid(),
      };
    //write file with new array
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);
});

router.put('/notes/:id', (req, res) => {
    
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    //read file
    let db = JSON.parse(fs.readFileSync("./db/db.json"));
    //find note user wants to delete
    let deleteNote = db.filter(item => item.id !== id);
    // update file based on note we took out
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote));
    res.json(deleteNote);
});

module.exports = router;