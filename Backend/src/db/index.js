import { mongoose } from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );
    console.log(
      `\n MongoDB connection success connected to ${connectionInstance.connection.host} \n`
    );
    // console.log(connectionInstance);
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
