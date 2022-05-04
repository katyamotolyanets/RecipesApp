require('dotenv').config();
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const db = require('./db-connection')

const PORT = process.env.PORT_FOR_APP || 8000

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('ROOT'))

app.use(require('./routes/api-recipe-route'))
app.use(require('./routes/api-ingredient-route'))
app.use(require('./routes/api-diet-route'))
app.use(require('./routes/api-user-route'))
app.use(require('./routes/api-meal-type-route'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
db.authenticate()
    .then(() => console.log('Successfully connect to db'))
    .catch(err => console.log('Error: ' + err))
