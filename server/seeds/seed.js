const db = require('./config/connection');
const { User, BookList } = require('./models');

const userData = require('./userData.json');
const bookData = require('./bookData.json'); 

db.once('open', async () => {
    await User.deleteMany({});
    await BookList.deleteMany({});

    // Create users
    const users = await User.insertMany(userData);
  
    // Get user ids
    const userIds = users.map(user => user._id);

    // Create book lists
    const bookLists = [];

    // Make 10 book lists
    for (let i = 0; i < 10; i++) {
        const bookList = {
            user: userIds[Math.floor(Math.random() * userIds.length)],
            books: []  
        };

        // Add 5 random books to each list
        for (let j = 0; j < 5; j++) {
            const randomBook = bookData[Math.floor(Math.random() * bookData.length)];
                bookList.books.push({
                title: randomBook.title,
                author: randomBook.author
                });
        };
        bookLists.push(bookList);
    }
    await BookList.insertMany(bookLists);

    console.log('Seeding complete!');
    process.exit(0);
});