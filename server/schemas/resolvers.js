const { User, ReadingList } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findById(userId); 
    },

    readingLists: async () => {
      return ReadingList.find();
    },

    readingList: async (parent, { listId }) => {
      return ReadingList.findById(listId);
    }
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },

    updateUser: async (parent, { userId, ...rest }) => {
      return User.findByIdAndUpdate(userId, rest, { new: true });
    },

    deleteUser: async (parent, { userId }) => {
      return User.findByIdAndDelete(userId);
    },

    createReadingList: async (parent, { userId, bookIds }) => {
      const list = await ReadingList.create({
        user: userId,
        books: bookIds.map(id => ({ book: id }))
      });
      return list;
    },

    addBookToList: async (parent, { listId, bookId }) => {
      return ReadingList.findByIdAndUpdate(
        listId,
        { $addToSet: { books: { book: bookId } } },
        { new: true }  
      );
    },

    removeBookFromList: async (parent, { listId, bookId }) => {
      return ReadingList.findByIdAndUpdate(
        listId,
        { $pull: { books: { book: bookId } } },
        { new: true }
      );
    },

    deleteReadingList: async (parent, { listId }) => {
      return ReadingList.findByIdAndDelete(listId);
    }
  }
};

module.exports = resolvers;