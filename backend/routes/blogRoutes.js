const Router = require('express');
const router = new Router();
const blogController = require('../controller/blogController');

router.post('/', blogController.create);
router.get('/', blogController.getAll);
router.get('/fromuser/:id', blogController.getAllByUser);
router.get('/:id', blogController.getById);
router.put('/', blogController.update);
router.delete('/:id', blogController.delete);

module.exports = router;
