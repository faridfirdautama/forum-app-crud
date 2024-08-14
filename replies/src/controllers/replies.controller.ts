import { Request, Response } from "express";
import repliesService from "../services/replies.service";

const RepliesController = {
  handleGetAllReplies: async (req: Request, res: Response) => {
    const allReplies = await repliesService.getAllReplies();
    return res
      .status(200)
      .json({ message: "List of Replies", data: allReplies });
  },
  handleCreateReplies: async (req: Request, res: Response) => {
    const { replies, threadId } = req.body;
    await repliesService.createReplies({ replies, threadId });
    return res
      .status(201)
      .json({ message: "Replies created", data: { replies, threadId } });
  },
  handleUpdateReplies: async (req: Request, res: Response) => {
    const { replies, threadId } = req.body;
    const updateHeader = req.headers.authorization;
    const updateId = req.params.id;
    if (!updateHeader) {
      return res.status(401).json({ message: "Unauthorized. Invalid token" });
    }
    await repliesService.updateReplies(updateId, { replies, threadId });
    return res
      .status(200)
      .json({ message: "Replies updated", data: { replies, threadId } });
  },
  handleDeleteReplies: async (req: Request, res: Response) => {
    const updateId = req.params.id;
    await repliesService.deleteReplies(updateId);
    return res.status(200).json({ message: "Replies deleted" });
  },
};

export default RepliesController;
