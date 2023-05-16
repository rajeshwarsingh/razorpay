const mongoose = require('mongoose');

const URL = 'mongodb+srv://Akbar23024:Akbar23024@cluster0.hb7na.mongodb.net/transaction';

const connectDb = () => {
  mongoose.connect('mongodb+srv://Akbar23024:Akbar23024@cluster0.hb7na.mongodb.net/transaction', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;

  db.on('error', (err) => { console.log(err); });
  db.once('open', () => { console.log('Database Connection Established') });
};

module.exports = connectDb;