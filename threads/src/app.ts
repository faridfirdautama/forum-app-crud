import express from "express";
import dotenv from "dotenv";
import { threadRouter } from "./routes/thread.route";
import { connectDb } from "./db-connect/db.connect";

dotenv.config();
connectDb;

const app = express();
app.use(express.json());
app.use("/api/v1/threads", threadRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
