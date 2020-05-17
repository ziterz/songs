if(process.env.NODE_ENV == 'development'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
const router = require('./routers')
const errHandler = require('./middleware/errorHandler')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(router)
app.use(errHandler)


app.listen(port, () => {
    console.log(`listening to port`, port)
})