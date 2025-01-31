
const express = require("express")
const empRouter = require("./routes/employeeRoute")
const app = express()


app.use(express.json()) 
app.use(express.static(`${__dirname}/public`)) //middleware for static page
app.use("/api/v1",empRouter)


module.exports = app
