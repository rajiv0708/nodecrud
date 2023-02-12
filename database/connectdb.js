import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    const DB_OPTIONS = {
      dbName: "officedb",
    };
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DATABASE_URI, DB_OPTIONS);
    console.log("Database Connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connnectDB;
