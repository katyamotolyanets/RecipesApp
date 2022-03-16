const express = require('express')
const router = express.Router()
const Ingredient = require('../database/models/Ingredient')

router.get('/', (req, res) =>
    Ingredient.findAll()
        .then(ingredients => {
            console.log(ingredients)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router