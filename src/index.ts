import express from "express";
import authRoutes from "./routes/auth";
import connectDB from "./db/mongo.database";

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Register routes
app.use("/api/v1/auth", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
