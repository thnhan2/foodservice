const express = require('express');
const ItemController = require('../controllers/ItemController');
const router = express.Router();
const upload = require('../middleware/upload');
// Get all items
router.get('/', ItemController.getAllItems);
router.get('/:id', ItemController.getItemById);
router.post('/', ItemController.createItem);
router.post('/image/:id', upload.single('image'), ItemController.uploadItemImage);
router.put('/:id', ItemController.updateItem);
router.delete('/:id', ItemController.deleteItem);
module.exports = router;
module.exports = router;