const express = require('express')
const router = express.Router()

const {
    getDiets,
    getDiet
} = require('../controllers/api-diet-controller')

router.get('/api/diets', getDiets);
router.get('/api/diets/:id', getDiet);

module.exports = router