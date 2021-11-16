const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mgroberman:Tu3sday29@cluster0.toizs.mongodb.net/E-Commerce?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
