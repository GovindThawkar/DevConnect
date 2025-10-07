const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Profile route (protected)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
