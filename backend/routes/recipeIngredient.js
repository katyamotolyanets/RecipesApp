const express = require('express')
const router = express.Router()
const RecipeIngredient = require("../database/models/RecipeIngredient");

router.get('/', (req, res) =>
    RecipeIngredient.findAll()
        .then(recipeIngredients => {
            console.log(recipeIngredients)
            res.sendStatus(200);
        })
        .catch(err => console.log(err)))

module.exports = router