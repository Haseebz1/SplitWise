// controller.js
const Expense = require('./models/model');

exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createExpense = async (req, res) => {
  const expense = new Expense({
    description: req.body.description,
    amount: req.body.amount,
    payer: req.body.payer,
    participants: req.body.participants
  });

  try {
    const newExpense = await expense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
