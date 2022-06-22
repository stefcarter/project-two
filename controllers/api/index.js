const router = require('express').Router();
const userRoutes = require('./user-routes');
const newUser = require('./user')

router.use('/user', userRoutes);
router.use('/newuser', newUser);

module.exports = router;