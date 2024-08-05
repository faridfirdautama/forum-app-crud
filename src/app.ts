import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route";
import { threadRouter } from "./routes/thread.route";
import { repliesRouter } from "./routes/replies.route";

dotenv.config();

const app = express();
const port: number = 8080;
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/threads", threadRouter);
app.use("/api/v1/replies", repliesRouter);

mongoose
  .connect(process.env.URI_MONGO_DEV as string)
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log("MongoDB connection failed"));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
