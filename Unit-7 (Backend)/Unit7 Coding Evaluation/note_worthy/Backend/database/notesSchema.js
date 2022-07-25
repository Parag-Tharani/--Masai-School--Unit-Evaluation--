const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:{
        type:String
    },
    note:{
        type:String
    },
    label:{
        type:String
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
})

const noteData = mongoose.model("notes", noteSchema)

module.exports = noteData

