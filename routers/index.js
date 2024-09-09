const express = require('express');
const { getAllData, getCategoryById, getProductById, getColorById } = require('../controllers/get');
const router = express.Router();

router.get('/all', getAllData)
router.get('/category/:id', getCategoryById)
router.get('/product/:id', getProductById)
router.get('/color/:id', getColorById)

module.exports = router;