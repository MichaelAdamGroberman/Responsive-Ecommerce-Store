const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI ||
    'sermongodb+srv://mgroberman:Tu3sday29@cluster0.toizs.mongodb.net/E-Commerce?retryWrites=true&w=majorityver',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
