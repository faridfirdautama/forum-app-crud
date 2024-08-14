import { IThread } from "../entities/thread.entity";
import threadRepository from "../repositories/thread.repository";

const threadService = {
  getAllThreads: async () => {
    try {
      const allThreads = await threadRepository.getAllThreads();
      return allThreads;
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
  getThread: async (id: string) => {
    try {
      const thread = await threadRepository.getThread(id);
      return thread;
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
  createThread: async (thread: IThread) => {
    try {
      // validation
      if (thread.thread.length < 10) {
        const tLength = thread.thread.length;
        return `${tLength} characters is too short man, make it longer!!!`;
      }
      const newThread = await threadRepository.createThread(thread);
      return newThread;
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
  updateThread: async (id: string, thread: IThread) => {
    try {
      // validation
      if (thread.thread.length < 10) {
        const tLength = thread.thread.length;
        console.log(
          `${tLength} characters is too short man, make it longer!!!`,
        );
        return;
      }
      const updated = await threadRepository.updateThread(id, thread);
      return updated;
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
  deleteThread: async (id: string) => {
    try {
      await threadRepository.deleteThread(id);
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
};

export default threadService;
