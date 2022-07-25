const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database");
const UserData = require("./routes/UserData");
const NoteData = require("./routes/NoteData");


const app = express();

app.use(express.json())
app.use(cors())



app.use(UserData)
app.use(NoteData)


connectDatabase()
.then(() => {
    app.listen(8080, () => {
        console.log("Database Initialized at http://localhost:8080")
    })
})
.catch((err) => console.log("Error Connecting Database"))
