import type { RegisterUserInput } from "../middlewares/validation.js";
import Users from "../models/user.model.js";
import { User } from "../types/user.types.js";

const findAllUsers = () => {};

const findUser = async(email:string) => {
  try {
    const user = await Users.findOne({
      email:email
    })

    return user;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.log(message);
    throw Error(message);
  }
};

const findById = () => {};

const createUser = async (userDetails: RegisterUserInput) => {
  try {
    const user = new Users({
      name: userDetails.name,
      username: userDetails.username,
      email: userDetails.email,
      password: userDetails.password,
      profile_image: userDetails.profile_image,
    });

    await user.save();

    return user;
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.log(message);
    throw Error(message);
  }
};

export const authService = {
  findAllUsers,
  findUser,
  findById,
  createUser,
};
