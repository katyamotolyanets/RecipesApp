const express = require('express')
const Ingredient = require("../database/models/Ingredient");
const Recipe = require("../database/models/Recipe");
const RecipeIngredient = require("../database/models/RecipeIngredient");
const router = express.Router()
const {
    getRecipes,
    getRecipe
} = require('../controllers/api-recipe-controller')

Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });
Ingredient.belongsToMany(Recipe, { through: RecipeIngredient });

router.get('/api/recipes', getRecipes);
router.get('/api/recipes/:id', getRecipe);

module.exports = router