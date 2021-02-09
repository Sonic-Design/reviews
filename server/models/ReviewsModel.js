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

const addReview = (req, cb) => {
  console.log(req.body);
  const values = [
    req.params.id,
    req.body.user_id,
    req.body.cleanliness,
    req.body.accuracy,
    req.body.communication,
    req.body.location_value,
    req.body.check_in,
    req.body.stay_value,
    req.body.comment,
    req.body.comment_timestamp
  ];
  const query = `INSERT INTO review_entry (property_id, user_id, cleanliness, accuracy, communication, location_value, check_in, stay_value, comment, comment_timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`;
  db.query(query, values)
    .then((data) => cb(null, data))
    .catch(cb);
};

const editReview = (req, cb) => {
  const values = [
    req.body.cleanliness,
    req.body.accuracy,
    req.body.communication,
    req.body.location_value,
    req.body.check_in,
    req.body.stay_value,
    req.body.comment,
    req.body.comment_timestamp,
    req.params.entryId,
  ];
  const query = 'UPDATE review_entry SET cleanliness=$1, accuracy=$2, communication=$3, location_value=$4, check_in=$5, stay_value=$6, comment=$7, comment_timestamp=$8 WHERE review_id=$9';
  db.query(query, values)
    .then(({ rows }) => cb(null, rows))
    .catch(cb);
}

const deleteReview = (id, cb) => {
  const values = [id]
  const query = 'DELETE FROM review_entry WHERE review_id=$1';
  db.query(query, values)
    .then(({ rows }) => cb(null, rows))
    .catch(cb);
};

module.exports = {
  getPropertyRatings,
  getReviews,
  addReview,
  editReview,
  deleteReview
};
