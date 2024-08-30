import { Router } from "express";
import { registerUser } from "../controllers/auth";
import { validateRegistration } from "../middlewares/validation.error";
import { handleConflictErrors } from "../middlewares/conflict.error";
import { logErrors } from "../middlewares/logging.error";

const router = Router();

// Route for user registration
router.post("/register", validateRegistration, registerUser);
router.use(handleConflictErrors);
router.use(logErrors);

export default router;
