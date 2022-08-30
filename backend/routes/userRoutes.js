const Router = require('express');
const router = new Router();
const userController = require('../controller/userController');
const authMiddleware = require('../middleWare/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);

module.exports = router;



// router.post('/user', userController.createUser);
// router.get('/user', userController.getUsers);
// router.get('/user/:id', userController.getOneUser);
// router.put('/user', userController.updateUser);
// router.delete('/user/:id', userController.deleteUser);