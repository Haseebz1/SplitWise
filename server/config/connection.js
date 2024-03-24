const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017');

module.exports = mongoose.connection; 