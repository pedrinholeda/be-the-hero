const express = require ("express")

const app = express()

app.get("/", (req,res) =>{
    return res.json({
        mensagem: "Im Listening the port"
    })
})

app.listen(3333)