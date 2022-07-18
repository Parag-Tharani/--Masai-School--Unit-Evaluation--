const express = require("express");
const getmeIP = require("../Handlers/getIP");

const getIP = express.Router();


getIP.get("/", (req, res) => {
    res.send("Welcome to Evaluate my 1st Backend Evaluation :)")
})

getIP.post("/getmeip", getmeIP)

module.exports = getIP