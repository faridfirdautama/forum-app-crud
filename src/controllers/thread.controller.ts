import { Request, Response } from "express";
import ThreadService from "../services/thread.service";

const ThreadController = {
  handleGetAllThreads: async (req: Request, res: Response) => {
    const threads = await ThreadService.getAllThreads();
    return res.status(200).json({ message: "List of Threads", data: threads });
  },
  handleCreateThread: async (req: Request, res: Response) => {
    const { thread, userId } = req.body;
    await ThreadService.createThread({ thread, userId });
    return res
      .status(201)
      .json({ message: "Thread created", data: { thread, userId } });
  },
  handleUpdateThread: async (req: Request, res: Response) => {
    const threadId = req.params.id;
    const threadHeader = req.headers.authorization;
    const { thread, userId } = req.body;
    // Check authorization
    if (!threadHeader) {
      return res.status(401).json({ message: "Unauthorized. Invalid token" });
    }
    await ThreadService.updateThread(threadId, { thread, userId });
    return res
      .status(201)
      .json({ message: "Thread updated", data: { thread, userId } });
  },
  handleDeleteThread: async (req: Request, res: Response) => {
    const threadId = req.params.id;
    await ThreadService.deleteThread(threadId);
    return res.status(200).json({ message: "Thread deleted" });
  },
};

export default ThreadController;
