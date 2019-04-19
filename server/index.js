require("dotenv").config();
const express = require("express");
const massive = require("massive");
const {getAll, postItem, Delete} = require("./controller")

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance)
})
.catch(err => {
    console.log(err)
})


app.use(express.json())

app.get("/api/houses", getAll)
app.post("/api/houses", postItem)
app.delete("/api/houses/:id", Delete)


app.listen(SERVER_PORT, () => {
    console.log(`I am listening on ${SERVER_PORT}`)
})