const express = require('express')
const router = express.Router()

const {
    getFavorites,
    addFavorite,
    deleteFavorite
} = require('../controllers/api-favorite-controller')

router.get('/api/favorites', getFavorites);
router.post('/api/favorites', addFavorite);
router.delete('/api/favorites/:id', deleteFavorite);

module.exports = router