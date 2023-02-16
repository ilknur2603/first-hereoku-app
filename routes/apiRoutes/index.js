const router = require("express").Router();
const {createNewNote,updateDb} =require("../../lib/notes");
//Unique id
const {v4:uuidv4} =require("uuid");
const {notes} = require("../../db/db.json")

//GET method, I used get method with request and respond
//I got informations with get method
router.get("/notes", (req,res) => {
    //create variable
    const results = notes;
    //respond.Json
    res.json(results);
});

//Used post method
//I send informations with post method //reg, res
router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

router.delete("/notes/:id" , (req,res) => {
    const params = req.params.id
    updateDb(params , notes);
    res.redirect("")
})
//Export it
module.exports = router;