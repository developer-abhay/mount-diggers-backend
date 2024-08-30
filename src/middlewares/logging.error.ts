import { Request, Response, NextFunction } from "express";

export const logErrors = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(11);
  // console.error("Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
};
