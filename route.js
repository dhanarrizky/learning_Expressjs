const express = require("express")
const path = require("path")

const Route = () => {
    const app = express()
    const port = 3000;

    const __dirname = path.resolve()

    app.get("/",(req,res) =>{
        // res.send("Home Page")
        // if you want to give feedback with json
        res.json({
            name:"ucok",
            age:20
        })
    })

    app.get("/Product/:id",(req,res) =>{
        console.log("params : ", req.params)
        res.send(`id : ${req.params.id}`)
    })

    app.get("/UseQuery/:id",(req,res) =>{
        console.log("params : ", req.query)
        res.send(`query : ${req.query}`)
    })

    app.get("/About",(req,res) =>{
        res.send("About Page")
    })

    app.get("/Contact",(req,res) =>{
        // res.send("Contact Page")
        res.sendFile(path.join(__dirname,"src","pages","contact.html"))
    })

    app.use("*",(req,res) =>{
        res.status(404)
        res.send("Page Not Found")
    })


    app.listen(port, () => {
        console.log(`\tapp running on port http://localhost:${port}`)
    })

}

module.exports = Route