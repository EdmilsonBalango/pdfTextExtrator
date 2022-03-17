const bodyParser =  require('body-parser')
const express = require('express')
const cors = require('cors')
const router = express.Router()


const port = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

require('./controllers/engine')(app)


app.listen(port, () => console.log('listenning on port: ' + port))