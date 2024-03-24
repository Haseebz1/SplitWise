const express = require('express');
const path = require('path');
const db = require('./config/connection')


const app = express();
const PORT = process.env.PORT || 3001;

db.once('open', () => {
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
