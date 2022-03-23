const express = require("express")

const app = express()


app.get("/",(req,res)=>{
    res.send("we are on port 3000")
})


start = ()=>{
    app.listen(3000, (req,res)=>{
        console.log("We are on port 3000")
    })
}

module.exports = start