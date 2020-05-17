if (process.env.NODE_ENV == "development") {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const PORT = process.env.PORT || 5000
const err = require('./helpers/err')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)
app.use(err)

app.listen(PORT, () => { console.log('run port', +PORT) })