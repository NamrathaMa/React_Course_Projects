export default function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (err.name === "CastError") {
    return res.status(400).json({ error: "Invalid id" });
  }

  if (err.name === "ValidationError") {
    const errMessages = Object.values(err.errors).map((e) => e.message);
    return res
      .status(400)
      .json({ error: "Validation failed", details: errMessages });
  }

  console.error(err);
  return res.status(500).json({ error: "Something went wrong on the server." });
}
