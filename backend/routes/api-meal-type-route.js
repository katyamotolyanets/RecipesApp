const express = require("express");

const router = express.Router()
const {
    getMealTypes
} = require('../controllers/api-meal-type-controller')

router.get('/api/meal-types/', getMealTypes)

module.exports = router;