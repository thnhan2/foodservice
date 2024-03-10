const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(jsonParser)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World')
    }
)
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI)
    .then((result) => console.log('Connected to db'))
    .catch((err) => console.log(err))

const categoryRoute = require('./routes/CategoryRoute')
app.use('/api/categories', categoryRoute)

const itemRoute = require('./routes/ItemRoute')
app.use('/api/foods', itemRoute)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))



