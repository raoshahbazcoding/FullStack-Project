import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://full-stack-project-01.vercel.app", // production frontend
      "http://localhost:5173", // dev frontend
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// MongoDB connect
mongoose
  .connect("mongodb+srv://meracodestyle:raoshabaz@cluster0.90umpwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Schema & Model
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/api/users", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newUser = new User({ firstName, lastName, email });
    await newUser.save();
    res.status(201).json({ message: "User saved successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start server (locally)
// app.listen(3000, () => console.log("Server running on port 3000"));

export default app; // agar vercel pr deploy karna ho
