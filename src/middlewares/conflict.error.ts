import { Request, Response, NextFunction } from "express";

export const handleConflictErrors = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(11);
  if (err instanceof Error && err.message.includes("E11000")) {
    const conflictErrors: { email?: string; phoneNumber?: string } = {};
    if (err.message.includes("email")) {
      conflictErrors.email = "Email already exists";
    }
    if (err.message.includes("phoneNumber")) {
      conflictErrors.phoneNumber = "Phone number already exists";
    }
    // if (Object.keys(conflictErrors).length > 0) {
    return res.status(409).json(conflictErrors);
    // }
  }
  next(err);
};
