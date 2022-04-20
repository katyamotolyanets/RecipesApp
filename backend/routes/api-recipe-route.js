const express = require('express')
const Ingredient = require("../models/Ingredient");
const Recipe = require("../models/Recipe");
const RecipeIngredient = require("../models/RecipeIngredient");
const User = require("../models/User");
const router = express.Router()
const {
    getRecipes,
    getRecipe
} = require('../controllers/api-recipe-controller')

Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });
Ingredient.belongsToMany(Recipe, { through: RecipeIngredient });
Recipe.belongsTo(User, {foreignKey: 'AUTHORID'})

router.get('/api/recipes', getRecipes);
router.get('/api/recipes/:id', getRecipe);

module.exports = router