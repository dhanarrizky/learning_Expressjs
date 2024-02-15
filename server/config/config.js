const mongoose = require('mongoose')
const conDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.MONGOURL)
        console.log(`Database Connected : ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
    }
}

module.exports = conDB