const express = require('express')
const router = express.Router()

const Ingredient = require("../models/Ingredient");
const RecipeIngredient = require("../models/RecipeIngredient");
const User = require("../models/User");
const MealType = require("../models/MealType");
const Diet = require("../models/Diet");
const Recipe = require("../models/Recipe");
const Favorite = require("../models/Favorite");

const {
    getRecipes,
    getRecipe,
    createRecipe
} = require('../controllers/api-recipe-controller')


Recipe.belongsToMany(Ingredient, { through: RecipeIngredient });
Recipe.belongsTo(User, {foreignKey: 'AUTHORID'})
Recipe.belongsTo(MealType, {foreignKey: 'MEALTYPEID'})
Recipe.belongsTo(Diet, {foreignKey: 'DIETID'})
Recipe.belongsToMany(User, {through: Favorite, foreignKey: "RECIPEID"})


router.get('/api/recipes', getRecipes);
router.get('/api/recipes/:id', getRecipe);
router.post('/api/recipes', createRecipe);

module.exports = router