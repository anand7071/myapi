const express  = require("express")

const start = require("./server")

const app = express()

app.use(express.json())


start()

