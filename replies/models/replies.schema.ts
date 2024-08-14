import { Schema, model } from "mongoose";

// Schema
const repliesSchema = new Schema(
  {
    replies: String,
    threadId: { type: Schema.Types.ObjectId, ref: "Thread" },
  },
  { versionKey: false },
);

// Collection
export const Replies = model("Replies", repliesSchema);
