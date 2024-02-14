const express = require('express')
const routes = express.Router()

routes.get('', (req,res) => {
    // res.send("Hello World")
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJS, Express & MongoDb."
    }

    res.render('index', { locals })
})

routes.get('/about', (req,res) => {
    res.render('about')
})

module.exports = routes