const jwt = require("jsonwebtoken");
// const SECRET = process.env.SECRET;
const SECRET = "HopefullyMyTestGoesWell";
const noteData = require("../database/notesSchema");


async function GetNotes(req,res){

    var token = req.headers.token;
    
    const data = await noteData.find().populate("user")

    if(token){
        return res.send(data)
    }else{
        return res.send("User Not Logged In")
    }
}

async function Postnotes(req,res){
    var token = req.headers.token;
    let { note } = req.body;


    if(token){
        data = await noteData.create(note)
        return res.send({"data":data})
    }else{
        return res.send("User Not Logged In")
    }



}



async function UpdateNote(req,res){
    var token = req.headers.token;
    let { id }  = req.params;
    let {note: note_data} = req.body

    if(token){
    let note = await noteData.findById(id)

    for (const [key, value] of Object.entries(note_data)) {
        note[key] = value;
    }

    await note.save()
    return res.send("Post Updated")
    }else{
        return res.send("User Not Logged In")
    }
}



async function DeleteNote(req,res){
    var token = req.headers.token;
    let { id }  = req.params;

    if(token){
        await noteData.findByIdAndDelete(id)
        return res.send("Post Deleted")
    }else{
        return res.send("User Not Logged In")
    }

}

module.exports = {
    GetNotes,
    Postnotes,
    UpdateNote,
    DeleteNote
}
