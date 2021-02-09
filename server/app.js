const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const path = require('path');
const controller = require('./controllers/ReviewsController.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(compression());
app.use('/:id', express.static(path.join(__dirname, '../public')));
app.use('/:id/bundle', express.static(path.join(__dirname, '../public/main.js')));
app.get('/api/property/:id', controller.getPropertyRatings);
app.get('/api/reviews/:id', controller.getReviews);
app.post('/api/reviews/:id', controller.addReview);
app.put('/api/reviews/:id/entry/:entryId', controller.editReview);
app.delete('/api/reviews/:id/entry/:entryId', controller.deleteReview);

module.exports = app;
