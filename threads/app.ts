import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/v1/threads", threadRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
