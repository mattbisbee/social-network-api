const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/thoughts` and `/reaction` to routes created in `thought-routes.js`
router.use('/thoughts', thoughtRoutes);
router.use('/reaction', thoughtRoutes);
// add prefix of `/users` and `/friends` to routes created in `user-routes.js`
router.use('/users', userRoutes);
router.use('/friends', userRoutes);

module.exports = router;