import { Request, Response, NextFunction } from "express";
import { registerSchema } from "../types";

export const validateRegistration = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const parseResult = registerSchema.safeParse(req.body);
  if (!parseResult.success) {
    const zodErrors: Record<string, string> = {};
    parseResult.error.issues.forEach((issue) => {
      zodErrors[issue.path[0]] = issue.message;
    });
    return res.status(400).json({ zodErrors });
  }
  req.body = parseResult.data;
  next();
};
