import mongoose from "mongoose";

export const Post = mongoose.model("Post", {
  author: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
} as any);
