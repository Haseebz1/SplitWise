
const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller');


router.get('/expenses', controller.getAllExpenses);
router.post('/expenses', controller.createExpense);

module.exports = router;
