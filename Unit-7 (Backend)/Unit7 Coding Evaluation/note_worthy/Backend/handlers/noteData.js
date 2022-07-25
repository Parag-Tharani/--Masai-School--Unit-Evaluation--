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
        return res.send("User Not Logged IN")
    }
}

async function Postnotes(req,res){
    let { note } = req.body;

    data = await noteData.create(note)

    return res.send({"data":data})
}



async function UpdateNote(req,res){
    let { id }  = req.params;

    let note = await noteData.findById(id)

    for (const [key, value] of Object.entries(noteData)) {
        note[key] = value;
    }

    await note.save()

    return res.send("Post Updated")
}



async function DeleteNote(req,res){
    let { id }  = req.params;

   await noteData.findByIdAndDelete(id)

    return res.send("Post Deleted")
}

module.exports = {
    GetNotes,
    Postnotes,
    UpdateNote,
    DeleteNote
}
