import type { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/apiResponse.js";
import { supabaseAdmin } from "../config/supabase.js";

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {

  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return errorResponse(res, "No token")

  const { data, error } = await supabaseAdmin.auth.getUser(token);

  if (error) return errorResponse(res, "Invalid token")

  req.user = data.user;
  next();
};
