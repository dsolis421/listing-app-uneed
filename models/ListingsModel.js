var mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  "name": {
    type: String,
    required: true
  },
  "status": {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('listings', listingSchema);
