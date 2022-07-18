const express = require("express");
const cors = require("cors");
const getIP = require("./Routes/getIP");
const productsRouter = require("./Routes/products");

const app = express();

app.use(express.json());
app.use(cors());

app.use(getIP)
app.use(productsRouter)



app.listen(8080, () => {
    console.log("Database Initiated at http://localhost:8080")
})