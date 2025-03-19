const { Auth } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const self = {};

// Register User
self.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Cek jika email sudah terdaftar
    const existingUser = await Auth.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // Hash password sebelum disimpan
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user ke database
    const newUser = await Auth.create({
      name,
      email,
      password: hashedPassword,
    });

    res.sendSuccess(
      {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      "User registered successfully!"
    );
  } catch (error) {
    next(error);
  }
};

// Login User
self.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await Auth.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Email does not exist!" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect password!" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.sendSuccess(
      {
        token,
      },
      "User logged in successfully!"
    );
  } catch (error) {
    next(error);
  }
};

// Get User Info (Protected Route)
self.me = async (req, res, next) => {
  try {
    const user = req?.user;

    res.sendSuccess(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      "User info retrieved successfully!"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = self;
