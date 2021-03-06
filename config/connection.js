const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});


// Use this to log mongo queries being executed!
mongoose.set('debug', true);
module.exports = mongoose.connection;