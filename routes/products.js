import express from "express";
const router = express.Router();
import { getAllProducts } from "../models/index.js";

/* GET products. */
router.get("/", async function (req, res) {
  const products = await getAllProducts();
  res.json({ success: true, payload: products });
});

export default router;
