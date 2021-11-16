const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongoDB_server' {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
