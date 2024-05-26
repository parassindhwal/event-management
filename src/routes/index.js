const router = require('express').Router();
const userRoutes = require('./users')
const eventsRoutes = require('./events')
const { verifyToken } = require('../utils/middlewares/verifyAuthToken')
// const { users } = require('../store');

router.use('/users', userRoutes);
router.use('/events', verifyToken, eventsRoutes);
// router.get('/list', (req, res) => {
//     return res.send(users)
// });

module.exports = router;