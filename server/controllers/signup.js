const SignUpUser = require("../models/signup");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SignUpUserContoller = async (req, res) => {
  const body = req.body;
  if (!body || !body.email || !body.password || !body.username) {
    return res.status(400).json({ msg: "All fields are required.." });
  }

  try {
    const { email, password, username } = req.body;

    const existingUserByEmail = await SignUpUser.findOne({ email });
    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const existingUserByUsername = await SignUpUser.findOne({ username });
    if (existingUserByUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new SignUpUser({
      email,
      password: hashedPassword,
      username,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

module.exports = {
  SignUpUserContoller,
};
