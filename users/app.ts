import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route";

dotenv.config();

const app = express();
const port: number = 8080;
app.use(express.json());
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
