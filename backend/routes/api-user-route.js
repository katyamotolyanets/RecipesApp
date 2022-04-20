const express = require('express')
const router = express.Router()
const {check} = require('express-validator')
const {
    getUsers,
    registration,
    login,
    auth
} = require('../controllers/api-user-controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/api/registration', [
    check('USERNAME', 'Username must be not empty').notEmpty(),
    check('EMAIL', 'Email must be not empty').notEmpty(),
    check('PASSWORD', 'Password must be not empty').isLength({min: 4, max: 10})
], registration);
router.post('/api/login', [
    check('EMAIL', 'Email must be not empty').notEmpty(),
    check('PASSWORD', 'Password must be not empty').isLength({min: 4, max: 10})
], login);
router.get('/api/auth', authMiddleware, auth)
router.get('/api/users', getUsers);

module.exports = router