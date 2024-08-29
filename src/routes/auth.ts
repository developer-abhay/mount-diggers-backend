import { Router } from "express";
import { registerUser } from "../controllers/auth";

const router = Router();

// Route for user registration
router.post("/register", registerUser);

export default router;
