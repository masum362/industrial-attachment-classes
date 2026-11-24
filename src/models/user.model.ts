import mongoose from "mongoose";
import type { RegisterUserInput as UserType } from "../middlewares/validation.js";

const userSchema = new mongoose.Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);


const userModel = mongoose.model("users", userSchema);

export default userModel;
