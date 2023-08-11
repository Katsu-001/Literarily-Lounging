const mongoose = require('mongoose');

const ReadingListSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  books: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
      },
      dateAdded: {
        type: Date,
        default: Date.now
      },
      thoughts: {
        type: String
      },
      status: {
        type: String,
        enum: ['In Progress', 'Completed']
      },
      rating: {
        type: Number,
        min: 1,
        max: 5
      }
    }
  ]
});

const ReadingList = mongoose.model('ReadingList', ReadingListSchema);
module.exports = ReadingList;