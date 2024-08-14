import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.URI_MONGO_DEVSCALE as string)
    .then(() => console.log("MongoDB succesfully connected"))
    .catch(() => console.log("MongoDB connection failed"));
};
