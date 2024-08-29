import { Request, Response } from "express";
import User from "../models/Users";

// Controller function for user registration
export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, phoneNumber } = req.body;

  try {
    const user = new User({ name, email, phoneNumber, isVerified: false });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error: unknown) {
    res.status(500).json({ error: error });
  }
};
