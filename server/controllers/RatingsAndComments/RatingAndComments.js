const Ratings = require("../../models/RatingsAndCommentsModels/RatingsAndCommentsModel");

const postRating = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { rating, comment } = req.body;

    const ratingsAndComment = new Ratings({
      rating,
      comment,
      bookId,
    });

    await ratingsAndComment.save();

    res.status(201).json({
      message: "Rating created successfully",
      book: ratingsAndComment,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

const getRatingsById = async (req, res) => {
  const userId = req.params.id;
  try {
    const ratings = await Ratings.find({ bookId: userId }); // Assuming bookId is used as a reference to the ratings
    if (ratings.length === 0) {
      return res.status(404).json({ error: "Ratings not found" });
    }
    return res.json(ratings);
  } catch (err) {
    return res.status(500).json({ error: "Error finding ratings" });
  }
};

module.exports = {
  postRating,
  getRatingsById,
};
