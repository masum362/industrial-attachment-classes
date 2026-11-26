import mongoose from "mongoose";
import { Schema, model, Types } from "mongoose";

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

todosSchema.add({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const todoModel = mongoose.model("todo", todosSchema);

export default todoModel;
