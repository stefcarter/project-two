const router = require('express').Router();
// const userRoutes = require('./user-routes');
const user = require('./user')

router.use('/user', user);
// router.use('/newuser', newUser);

module.exports = router;