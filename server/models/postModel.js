const mongoose = require('mongoose')

const schema = mongoose.Schema
const postSchema = new schema({
    title: {
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        default:Date.now,
        required:true
    },
    updatedAt: {
        type:String,
        default:Date.now,
        required:true
    },
})

module.exports = mongoose.model('post', postSchema)