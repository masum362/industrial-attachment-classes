import { Request, Response } from "express";
import { authService } from "../services/auth.services.js";
import type { RegisterUserInput } from "../middlewares/validation.js";

import { comparePassword, hashPassword } from "../utils/verify.js";
import { generateToken } from "../utils/token.js";
import dotenv from "dotenv";

dotenv.config();

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    let user = await authService.findUser(email);

    if (!user) {
      return res.status(404).json({
        message: "Invalid inputs.",
      });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        message: "Invalid inputs.",
      });
    }

    const token = generateToken(
      {
        id: String(user._id),
        email: user.email,
      },
      String(process.env.JWT_SECRET_KEY),
    );

    const responseData = {
      name: user.name,
      username: user.username,
      email: user.email,
      profile_image: user.profile_image,
      token: token,
    };

    return res.status(201).json({
      message: "User logged in successfully",
      data: responseData,
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};
const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, username, profile_image } =
      req.body as RegisterUserInput;

    const trimmedName = name.trim();
    const userEmail = email.trim().toLowerCase();
    const hashedPassword = await hashPassword(password);

    const result = await authService.createUser({
      name: trimmedName,
      username,
      email: userEmail,
      password: hashedPassword,
      profile_image,
    });

    if (!result) {
      return res.status(403).json({
        message: "Something went wrong. Try again.",
      });
    }

    return res.status(201).json({ message: "hello world", data: result });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};

export { loginUser, registerUser };
