// model.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  payer: String,
  participants: [String]
});

module.exports = mongoose.model('Expense', expenseSchema);
