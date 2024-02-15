require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const connDB = require('./server/config/config')

const app = express()
const PORT = 3000 || process.env.PORT

connDB()

app.use(express.static('public'))

// template engine
app.use(expressLayout)
app.set('layout','./layouts/main')
app.set('view engine', 'ejs')


// app.get('', (req, res) => {
//     res.send("hello world")
// })

app.use('/', require('./server/routes/main'))

app.listen(PORT, () => {
    console.log(`App Running on http://localhost:${PORT}`)
})