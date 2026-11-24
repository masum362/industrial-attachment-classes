import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface JwtPayload {
  userId: string;
  email: string;
}   

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    console.log('called')
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(404).json({
        message: "Invalid User",
      });
    }

    jwt.verify(token,String(process.env.JWT_SECRET_KEY),(err, user) => {
    if (err) return res.status(404).json({
        message: "Invalid User",
      });
    req.user = user as JwtPayload;
    next();
  })

  } catch (error) {
    return res.status(404).json({
      message: "Invalid User",
    });
  }
};


export {authenticate}