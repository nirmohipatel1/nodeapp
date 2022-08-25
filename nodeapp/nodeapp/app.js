const express = require('express')
const app = new express();
const port = process.env.PORT|3000

const json = {
    "name": "DevOps Learning",
    "date": new Date()
}

app.get("/",(req,res)=>{
    res.send(
        json
    )
    res.end()
})

app.listen(port,()=>{
    console.log("App RUNNING on port"+port)
})