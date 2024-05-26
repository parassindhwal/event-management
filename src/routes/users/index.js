const router = require('express').Router();
const { register, login } = require('../../controllers/users')
const { validateRegistration, validateLogin } = require('../../utils/validators')

router.post('/register', validateRegistration, register)

router.post('/login', validateLogin, login)

module.exports = router;