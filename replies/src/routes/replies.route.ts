import express from "express";
import RepliesController from "../controllers/replies.controller";

export const repliesRouter = express.Router();

repliesRouter.get("/", RepliesController.handleGetAllReplies);
repliesRouter.post("/", RepliesController.handleCreateReplies);
repliesRouter.patch("/:id", RepliesController.handleUpdateReplies);
repliesRouter.delete("/:id", RepliesController.handleDeleteReplies);
