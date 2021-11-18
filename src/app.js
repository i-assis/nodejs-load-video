// imports
const express = require("express")
const path = require("path")
const logger = require("morgan")

// instantiating express
const app = express()

// now, can start from console:
// >> node src/server.js

// logger middleware
app.use(logger("tiny"))

app.use('/videos', express.static(path.join(__dirname, './videos')))

// adding a simple route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  });

// this goes at the end
module.exports = app

// biblio: https://dev.to/bam92/how-to-setup-a-minimal-node-js-server-5479