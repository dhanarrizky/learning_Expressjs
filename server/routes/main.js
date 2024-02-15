const express = require('express')
const routes = express.Router()
const Post = require('../models/postModel')

// get
// home 

routes.get('', async (req,res) => {
    // res.send("Hello World")
    const locals = {
        title: "NodeJs Blog",
        description: "Simple Blog created with NodeJS, Express & MongoDb."
    }

    try {
        const perPage = 10
        let page = req.query.page || 1

        const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec()

            const count = await Post.countDocuments()
            const nextPage = parseInt(page) + 1
            const hasNextPage = nextPage <= Math.ceil(count / perPage)

            res.render('index', {
                locals,
                data,
                current: page,
                nextPage:hasNextPage ? nextPage : null
            })
        // res.render('index', {locals, data})
    } catch (err){
        console.log(err)
    }
    // res.render('index', { locals })
})




// const insertPostData = () => {
//     Post.insertMany([
//         {
//             title: "Building a Blog",
//             body: "This is the body text"
//         },
//         {
//             title: "title 1",
//             body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 2",
//             body: "Lorem, ipsum dolor repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 3",
//             body: "Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 4",
//             body: "Lorem, Lore soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 5",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 6",
//             body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 7",
//             body: "Lorem, ipsum dolor repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 8",
//             body: "Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 9",
//             body: "Lorem, Lore soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 10",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 11",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 12",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 13",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 14",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 001",
//             body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 002",
//             body: "Lorem, ipsum dolor repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 003",
//             body: "Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 004",
//             body: "Lorem, Lore soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 005",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 006",
//             body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 007",
//             body: "Lorem, ipsum dolor repellendus, sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 008",
//             body: "Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 009",
//             body: "Lorem, Lore soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis autem sit et beatae deserunt optio dolorum esse harum suscipit, perspiciatis assumenda quos repellendus, sed quod magni molestias pariatur, dolorem soluta.sed quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 0010",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 0011",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 0012",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 0013",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         },
//         {
//             title: "title 0014",
//             body: "Lorem, quod magni molestias pariatur, dolorem soluta."
//         }
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