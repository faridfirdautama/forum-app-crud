import { Replies } from "../models/replies.schema";
import { IReplies } from "../entities/replies.entity";

const repliesRepository = {
  getAllReplies: async () => {
    try {
      const allReplies = await Replies.find().populate("threadId");
      return allReplies;
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  createReplies: async (replies: IReplies) => {
    try {
      const newReplies = new Replies(replies);
      await newReplies.save();
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  updateReplies: async (id: string, replies: IReplies) => {
    try {
      const updated = await Replies.findByIdAndUpdate(id, replies);
      return updated;
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  deleteReplies: async (id: string) => {
    try {
      await Replies.findByIdAndDelete(id);
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
};

export default repliesRepository;
