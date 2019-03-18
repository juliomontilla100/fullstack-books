const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.on('open', () => {
    console.log('DB connected')
})
mongoose.connection.on('error', (err) => {
    console.log(`DB error: ${err}`)
})