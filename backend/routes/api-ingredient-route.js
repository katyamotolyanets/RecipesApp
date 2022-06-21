const express = require('express')
const router = express.Router()

const RecipeIngredient = require("../models/RecipeIngredient");
const Recipe = require("../models/Recipe");
const Ingredient = require("../models/Ingredient");

const {
    getIngredients,
    getIngredient
} = require('../controllers/api-ingredient-controller')

Ingredient.belongsToMany(Recipe, { through: RecipeIngredient, foreignKey: "INGREDIENTID" });

router.get('/api/ingredients', getIngredients);
router.get('/api/ingredients/:id', getIngredient);

module.exports = router