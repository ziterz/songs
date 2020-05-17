const { NODE_ENV } = process.env
if ( NODE_ENV == 'development' ) {
    require('dotenv').config()
}

// app
const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.json({ msg: 'Server is running' }))
app.use(router)

// server
const http = require('http')
const PORT = process.env.PORT
const server = http.createServer(app)

server.listen(PORT, _=> {
    console.log(`App is listening at ${PORT}`)
})