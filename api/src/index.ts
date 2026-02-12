import "./telemetry";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (_req, res) => {
  res.json({ service: "vnext-api", version: "1.0.0" });
});

app.get("/api/items", (_req, res) => {
  res.json([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);
});

app.get("/health", (_req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
