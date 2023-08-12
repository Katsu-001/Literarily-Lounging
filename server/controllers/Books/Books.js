const Book = require("../../models/Books/Book");

const addBooks = async (req, res) => {
  try {
    const { image, title, description, overallRating } = req.body;

    const newBook = new Book({
      image,
      title,
      description,
      overallRating,
    });

    await newBook.save();

    res
      .status(201)
      .json({ message: "Book created successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

const getBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    return res.status(200).json(allBooks);
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

const getBookById = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await Book.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.json(user);
  } catch (err) {
    return res.status(500).json({ error: "Error finding user" });
  }
};


module.exports = {
  addBooks,
  getBooks,
  getBookById
};
