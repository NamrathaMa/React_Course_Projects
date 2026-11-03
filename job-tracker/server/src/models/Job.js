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
    salary: { type: Number, min: [0, "Salary can not be negative"] },
    status: {
      type: String,
      enum: JOB_STATUSES,
      default: "saved",
      trim: true,
    },
    interviews: [
      {
        date: { type: Date, required: [true, "Interview date is required"] },
        round: {
          type: String,
          trim: true,
          required: [true, "Interview round is required"],
        },
        notes: { type: String, trim: true },
      },
    ],
    contacts: [
      {
        name: {
          type: String,
          required: [true, "Contact name is required"],
          trim: true,
        },
        email: {
          type: String,
          lowercase: true,
          match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email.",
          ],
          trim: true,
        },
      },
    ],
    notes: { type: String, trim: true },
  },
  { timestamps: true },
);

export default mongoose.model("Job", jobSchema);
