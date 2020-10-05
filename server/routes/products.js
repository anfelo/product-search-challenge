const express = require('express');
const controllers = require('../controllers');
const models = require('../models');

const productsController = controllers.productsController(
	models.productModel()
);
const router = express.Router();

// GET /api/items?q=:query
router.get('/items', productsController.search);

// GET /item/:id
router.get('/items/:id', productsController.getById);

module.exports = router;
