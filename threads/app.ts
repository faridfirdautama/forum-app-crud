import express from "express";
import dotenv from "dotenv";
import { threadRouter } from "./routes/thread.route";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/v1/threads", threadRouter);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
