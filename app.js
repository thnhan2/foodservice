const express = require('express')
const db = require('./config/db')
const configureMiddleware = require('./config/middleware')
const path = require('path')

const app = express()

configureMiddleware(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`)
  await db.connectToDatabase()
})


const categoryRoute = require('./routes/CategoryRoute')
app.use('/api/categories', categoryRoute)

const itemRoute = require('./routes/ItemRoute')
app.use('/api/foods', itemRoute)

app.use(express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

module.exports = app



