import { Request, Response, NextFunction } from "express";
import { ApiError } from "./AppError";

export const errors = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 400;
  const message = error.statusCode ? error.message : "Error";
  return res.status(statusCode).json({ message });
};
