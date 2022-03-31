const express = require('express')
const router = express.Router()

const {
    getIngredients,
    getIngredient
} = require('../controllers/api-ingredient-controller')


router.get('/api/ingredients', getIngredients);
router.get('/api/ingredients/:id', getIngredient);

module.exports = router