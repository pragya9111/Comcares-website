// for vercel deploy
// backend/app.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './utils/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();

// CORS: allow your frontend (local + prod). Comma-separated list in env.
const allowed = (process.env.ALLOWED_ORIGINS || '*')
  .split(',')
  .map(s => s.trim());

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowed.includes('*') || allowed.includes(origin)) return cb(null, true);
    return cb(new Error('Not allowed by CORS'));
  }
}));

app.use(express.json());

// API routes
app.use('/api/contact', contactRoutes);

// Connect DB once per runtime
connectDB().catch(err => {
  console.error('MongoDB connection error:', err);
});

export default app;
