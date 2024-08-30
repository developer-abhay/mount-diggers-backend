import express from "express";
import authRoutes from "./routes/auth";
import connectDB from "./db/mongo.database";
import cors from "cors";
import { handleConflictErrors } from "./middlewares/conflict.error";
import { logErrors } from "./middlewares/logging.error";

const app = express();
const PORT = process.env.PORT || 8000;
const allowedOrigins = ["http://localhost:3000", "https://mountdiggers.com"];

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Register routes
app.use("/api/v1/auth", authRoutes);

// Error Middlewares
// app.use(handleConflictErrors);
// app.use(logErrors);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
