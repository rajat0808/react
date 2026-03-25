import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { defaultCategoryGroups } from "./data/defaultCategories.js";
import CategoryGroup from "./models/CategoryGroup.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "mongodb-api" });
});

app.get("/api/categories", async (_req, res) => {
  try {
    const groups = await CategoryGroup.find({})
      .sort({ order: 1, createdAt: 1 })
      .select("slug title description items order")
      .lean();

    res.json(groups);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch categories.",
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

app.put("/api/categories/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const { title, description, items, order = 0 } = req.body;

    if (!title || !description || !Array.isArray(items)) {
      return res.status(400).json({
        message: "title, description, and items[] are required.",
      });
    }

    const updatedGroup = await CategoryGroup.findOneAndUpdate(
      { slug },
      { slug, title, description, items, order },
      { upsert: true, new: true, runValidators: true }
    )
      .select("slug title description items order")
      .lean();

    return res.json(updatedGroup);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to save category group.",
      details: error instanceof Error ? error.message : String(error),
    });
  }
});

async function ensureSeedData() {
  const existingCount = await CategoryGroup.estimatedDocumentCount();

  if (existingCount > 0) {
    return;
  }

  await CategoryGroup.insertMany(defaultCategoryGroups);
}

async function startServer() {
  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI in environment variables.");
  }

  await mongoose.connect(MONGODB_URI);
  await ensureSeedData();

  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Server startup failed:", error);
  process.exit(1);
});
