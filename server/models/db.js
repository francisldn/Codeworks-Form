const mongoose = require('mongoose');
const DB_NAME = 'Events';
const URL = `mongodb://localhost:27017/${DB_NAME}`

mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology: true})

module.exports = mongoose;