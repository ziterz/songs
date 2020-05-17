if (process.env.NODE_ENV == 'development') {
  require(dotenv).config()
}

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const routers = require('./routers')
const errorHandler = require('./middlewares/errorHandler')
app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(routers)
app.use(errorHandler)

app.listen(PORT, () => {
  Console.log('PORT : '+3000)
})