import mongoose from "mongoose";

export default function dbconnecct() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.log("Error in connection");
  }
}
