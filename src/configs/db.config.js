const mongoose = require('mongoose')
const username = 'kimluan098'
const password = '3wrFlKkhp6PpKeRq'
const dbname = 'project_nodejs'
const URL = `mongodb+srv://${username}:${password}@cluster0.qgfcmqw.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        await mongoose.connect(
            URL, { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log('Connected to mongoDB')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = { connectDB };