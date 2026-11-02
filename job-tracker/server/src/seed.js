import "dotenv/config.js";
import mongoose from "mongoose";
import Job from "./models/Job.js";
import { jobs } from "./seed-data.js";

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  await Job.deleteMany({});

  const insertedJobs = await Job.insertMany(jobs);

  console.log(
    `Inserted ${insertedJobs.length} jobs into the MongoDB database.`,
  );
} catch (err) {
  console.log("Seed file failed to upload", err.message);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
  console.log("Disconnected from the database");
}
