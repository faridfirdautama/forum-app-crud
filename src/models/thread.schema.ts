import { Schema, model } from "mongoose";

// Schema
const threadSchema = new Schema(
  {
    thread: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { versionKey: false },
);

// Collection
export const Thread = model("Thread", threadSchema);
