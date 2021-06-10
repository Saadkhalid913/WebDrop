const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors");
const router = require("./api/routes/route");

const app = express()


app.use(cors({ origin: "*" }))
app.use("/", router);

app.listen(3000, () => console.log("hello world"))