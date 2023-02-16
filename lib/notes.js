//Use fs module ()
const fs = require("fs");
const path = require("path");

//I created function for updating notes
function updateDb(id, notesArray) {
    const deleteNote = id;
    // I used for loops
    for(let i =0; i < notesArray.length ; i++){
        if(deleteNote=== notesArray[i].id){
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify({notes: notesArray}, null , 2 ), err => {if(err) {throw err;}}
            )
        }
    }
}
// Create function, use fs.writeFile method
function createNewNote (body , notesArray){
    const newNote = body
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArray}, null , 2 ));
    return newNote;

}
//Export it
module.exports = {updateDb,createNewNote};

