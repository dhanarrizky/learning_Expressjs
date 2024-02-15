const express = require('express')
const routes = express.Router()
const Post = require('../models/postModel')

// get
// home 

routes.get('', (req,res) => {
    // res.send("Hello World")
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJS, Express & MongoDb."
    }

    res.render('index', { locals })
})




// const insertPostData = () => {
//     Post.insertMany([
//         {
//             title: "Building a Blog",
//             body: "This is the body text"
//         },
//         {
//             title: "title One",
//             body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title two",
//             body: "Lorem, ipsum dolor repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title three",
//             body: "Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title four",
//             body: "Lorem, Lore soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title five",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//     ])
// }
// insertPostData()


routes.get('/about', (req,res) => {
    res.render('about')
})

routes.get('/contact', (req,res) => {
    res.render('about')
})

routes.get('*', (req,res) => {
    res.render('404')
})

module.exports = routes