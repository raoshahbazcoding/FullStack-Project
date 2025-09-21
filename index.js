// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://full-stack-project-01.vercel.app", // production
      "http://localhost:5173", // dev
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://meracodestyle:raoshabaz@cluster0.90umpwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Schema & Model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// Routes

// 1. Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }); // latest first
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// 2. Add new user
app.post("/api/users", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = new User({ firstName, lastName, email });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Start server (local)
app.listen(3000, () => console.log("Server running on port 3000"));
