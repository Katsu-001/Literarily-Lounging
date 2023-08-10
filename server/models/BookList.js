const mongoose = require('mongoose');

const ReadingListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  books: [
    {
      bookId: {
        type: String,
        required: true
      },
      title: {
        type: String
      },
      author: {
        type: String  
      } 
    }
  ]
});

const ReadingList = mongoose.model('ReadingList', ReadingListSchema);
module.exports = ReadingList;