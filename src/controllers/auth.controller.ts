import { Request, Response } from "express";

const loginUser = async (req: Request, res: Response) => {
  try {
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};
const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, username, profile_image } = req.body;


      return res.status(201).json({ message:"hello world"});


  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return res.status(500).json({ message });
  }
};

export { loginUser, registerUser };
