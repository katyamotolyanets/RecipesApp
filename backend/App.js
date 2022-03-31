const dotenv = require('dotenv');
dotenv.config();

const db = require('./database/libs/connection')
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT_FOR_APP || 8000

const app = express()

app.use(cors())

app.get('/', (req, res) => res.send('ROOT'))

app.use(require('./routes/api-recipe-route'))
app.use(require('./routes/api-ingredient-route'))
app.use(require('./routes/api-diet-route'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

db.authenticate()
    .then(() => console.log('Successfully connect to db'))
    .catch(err => console.log('Error: ' + err))

