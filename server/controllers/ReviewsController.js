const models = require('../models/ReviewsModel.js');

const getPropertyRatings = (req, res) => (
  models.getPropertyRatings(req.params.id, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
);

const getReviews = (req, res) => (
  models.getReviews(req.params.id, (err, reviews) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
);

const addReview = (req, res) => {
  models.addReview(req, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  })
};

const editReview = (req, res) => {
  models.editReview(req.params, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
};

const deleteReview = (req, res) => {
  models.deleteReview(req.params.entryId, (err, data) =>{
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  })
}

module.exports = {
  getPropertyRatings,
  getReviews,
  addReview,
  editReview,
  deleteReview
};
