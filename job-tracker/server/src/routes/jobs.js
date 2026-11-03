import express from "express";
import Job, { JOB_STATUSES } from "../models/Job.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const filter = {};
  const { status, search } = req.query;

  if (status && !JOB_STATUSES.includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  if (status) {
    filter.status = status;
  }

  if (search) {
    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    filter.$or = [
      { company: { $regex: escaped, $options: "i" } },
      { role: { $regex: escaped, $options: "i" } },
    ];
  }
  const jobs = await Job.find(filter).sort({ createdAt: -1 });

  return res.json(jobs);
});

router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    return res
      .status(404)
      .json({ error: `Job with id ${req.params.id} not found.` });
  }
  return res.json(job);
});

router.post("/", async (req, res) => {
  const job = await Job.create(req.body);
  return res.status(201).json(job);
});

router.patch("/:id", async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
    runValidators: true,
  });
  if (!updatedJob) {
    return res
      .status(404)
      .json({ error: `Job with id ${req.params.id} not found.` });
  }
  return res.json(updatedJob);
});

router.delete("/:id", async (req, res) => {
  const deletedJob = await Job.findByIdAndDelete(req.params.id);

  if (!deletedJob) {
    return res.status(404).json({
      error: `Job with id ${req.params.id} not found.`,
    });
  }
  return res.status(204).end();
});

export default router;
