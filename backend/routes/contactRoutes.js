import express from "express";
import { createContact } from "../controllers/contactController.js";

const router = express.Router();

// POST request for contact form
router.post("/", createContact);

export default router;
