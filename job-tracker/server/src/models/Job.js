import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    location: { type: String, trim: true },
    link: { type: String, trim: true },
    status: {
      type: String,
      enum: ["saved", "applied", "interview", "offer", "rejected", "saved"],
      trim: true,
    },
    notes: { type: String, trim: true },
  },
  { timestamps: true },
);

export default mongoose.model("Job", jobSchema);
