const Router = require('express');
const router = new Router();
const userRouter = require('./userRoutes');
const blogRouter = require('./blogRoutes');

router.use('/user', userRouter);
router.use('/blog', blogRouter);

module.exports = router;