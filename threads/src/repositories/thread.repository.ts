import { Thread } from "../models/thread.schema";
import { IThread } from "../entities/thread.entity";

const threadRepository = {
  getAllThreads: async () => {
    try {
      const allThreads = await Thread.find().populate("userId");
      return allThreads;
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  getThread: async (id: string) => {
    try {
      const thread = await Thread.findById(id).populate("userId");
      return thread;
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  createThread: async (thread: IThread) => {
    try {
      const newThread = new Thread(thread);
      await newThread.save();
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  updateThread: async (id: string, thread: IThread) => {
    try {
      const updated = await Thread.findByIdAndUpdate(id, thread);
      return updated;
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
  deleteThread: async (id: string) => {
    try {
      await Thread.findByIdAndDelete(id);
    } catch (error) {
      console.log(`Repository Error: ${error}`);
    }
  },
};

export default threadRepository;
