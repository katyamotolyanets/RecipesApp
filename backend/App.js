const dotenv = require('dotenv');
dotenv.config();
const db = require('./database/libs/connection')
const express = require('express')

const PORT = process.env.PORT_FOR_APP || 8000

const app = express()

app.get('/', (req, res) => res.send('ROOT'))

app.use('/ingredients', require('./routes/ingredients'))
app.use('/diets', require('./routes/diets'))
app.use('/favorites', require('./routes/favorites'))
app.use('/mealTypes', require('./routes/mealTypes'))
app.use('/recipes', require('./routes/recipes'))
app.use('/users', require('./routes/users'))
app.use('/userDiets', require('./routes/userDiets'))
app.use('/recipeIngredients', require('./routes/recipeIngredient'))

app.listen(PORT, console.log(`Server started on port ${PORT}`))

db.sync()
    .then(() => console.log('Successfully connect to db'))
    .catch(err => console.log('Error: ' + err))

