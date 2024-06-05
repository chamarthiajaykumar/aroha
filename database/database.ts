import mongoose from "mongoose";

let isConnected = false;
const secret = process.env.MONGODB_URI;
if (!secret) {
  throw new Error("MONGODB URI does not exits");
}
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongoDb is already connected");
    return;
  }
  try {
    await mongoose.connect(secret);
    isConnected = true;
    console.log("DB connected");
  } catch (err) {
    console.log(err);
  }
};
