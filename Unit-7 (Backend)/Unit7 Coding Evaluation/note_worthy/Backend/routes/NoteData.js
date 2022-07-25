const express = require("express");
const { GetNotes, Postnotes, UpdateNote, DeleteNote } = require("../handlers/noteData");

const NoteData = express.Router();



NoteData.get("/notes", GetNotes)
NoteData.post("/note/create", Postnotes)
NoteData.patch("/note/:id", UpdateNote)
NoteData.delete("/note/:id", DeleteNote)


module.exports = NoteData