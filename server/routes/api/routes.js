const express = require("express");
const { SignUpUserContoller } = require("../controllers/signup");
const { loginController } = require("../controllers/login");
const { addBooks, getBooks, getBookById } = require("../controllers/Books/Books");
const { postRating, getRatingsById } = require("../controllers/RatingsAndComments/RatingAndComments");

const router = express.Router();

//users
router.post("/signup", SignUpUserContoller); //create a new user

router.post("/login", loginController); //get all users

//books
router.post("/books", addBooks);
router.get("/getBooks",getBooks);
router.get("/getBooksById/:id",getBookById);

//rating and comments
router.post("/postRating/:id",postRating);
router.get("/postRating/:id",getRatingsById);

module.exports = router;