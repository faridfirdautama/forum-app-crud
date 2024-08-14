import repliesRepository from "../repositories/replies.repository";
import { IReplies } from "../entities/replies.entity";

const repliesService = {
  getAllReplies: async () => {
    try {
      const allReplies = await repliesRepository.getAllReplies();
      return allReplies;
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
  createReplies: async (replies: IReplies) => {
    try {
      const newReplies = await repliesRepository.createReplies(replies);
      return newReplies;
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
  updateReplies: async (id: string, replies: IReplies) => {
    try {
      const updated = await repliesRepository.updateReplies(id, replies);
      return updated;
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
  deleteReplies: async (id: string) => {
    try {
      await repliesRepository.deleteReplies(id);
    } catch (error) {
      console.log(`Service Error: ${error}`);
    }
  },
};

export default repliesService;
