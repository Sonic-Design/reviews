const db = require('../../database/index.js');

const getPropertyRatings = (id, cb) => {
  const values = [id];
  const query = 'SELECT * from property_listings WHERE property_id=$1';
  db.query(query, values)
    .then(({ rows }) => cb(null, rows))
    .catch(cb);
};

const getReviews = (id, cb) => {
  const values = [id];
  const query = 'SELECT * FROM review_entry WHERE property_id=$1;';
  db.query(query, values)
    .then(({ rows }) => cb(null, rows))
    .catch(cb);
};

const addReview = ({ body }, cb) => {
  console.log(body);
  const values = [
    body.list_id,
    body.user_id,
    body.cleanliness,
    body.accuracy,
    body.communication,
    body.location_value,
    body.check_in,
    body.stay_value,
    body.comment,
    body.comment_timestamp
  ];
  const query = `INSERT INTO review_entry (listing_id, user_id, cleanliness, accuracy, communication, location_value, check_in, stay_value, comment, comment_timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
  db.query(query, values)
    .then(({ rows }) => cb(null, rows))
    .catch(cb);
};

const editReview = (req, cb) => {
  console.log(req.params);
}

const deleteReview = (req, cb) => {
  console.log(req.params);
};

module.exports = {
  getPropertyRatings,
  getReviews,
  addReview,
  editReview,
  deleteReview
};
