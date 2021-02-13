const { user, host, database, password } = require('./sensitiveInfo.js');
const { Pool } = require('pg');

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: 5432,
});

pool.connect()
  .then(() => console.log('connected to postgreSQL successfully!'));

  module.exports = pool;


// const mongoose = require('mongoose');

// const url = process.env.CONNECTIONSTRING || 'mongodb://localhost/fec';

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const reviewsSchema = new mongoose.Schema({
//   _id: Number,
//   averageRating: Number,
//   reviewCount: Number,
//   ratings: Array,
//   reviews: Array,
// });

// const Review = mongoose.model('Review', reviewsSchema);

// module.exports = {
//   connection: mongoose.connection,
//   Review,
// };