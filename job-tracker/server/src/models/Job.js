import mongoose from "mongoose";

export const JOB_STATUSES = [
  "saved",
  "applied",
  "interview",
  "offer",
  "rejected",
];

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
    },
    role: { type: String, required: [true, "Role is required"], trim: true },
    location: { type: String, trim: true },
    link: { type: String, trim: true },
    dateApplied: { type: Date },
    description: { type: String, trim: true },
    status: {
      type: String,
      enum: JOB_STATUSES,
      default: "saved",
      trim: true,
    },
    notes: { type: String, trim: true },
  },
  { timestamps: true },
);

export default mongoose.model("Job", jobSchema);
