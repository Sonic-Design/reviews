const db = require('../../database/index.js');

const get = (id, callback) => db.Review.findById(id, callback);

module.exports = get;
