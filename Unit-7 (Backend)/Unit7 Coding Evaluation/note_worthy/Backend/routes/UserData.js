const express = require("express");
const {GetNotes, register, login} = require("../handlers/userData");

const UserData = express.Router()

UserData.get("/", (req, res) => res.send("Welcome my Evaluators"))
UserData.post("/signUp", register)
UserData.post("/login", login)


module.exports = UserData