import "dotenv/config";
import { connectDB } from "./config/db.js";
import jobsRouter from "./routes/jobs.js";
import errorHandler from "./middleware/errorHandler.js";

import express from "express";

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/jobs", jobsRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

try {
  await connectDB(process.env.MONGODB_URI);
  app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`),
  );
} catch (err) {
  console.error("Failed to connect to DB", err.message);
  process.exit(1);
}
