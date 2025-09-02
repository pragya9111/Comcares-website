// for vercel deploy
// backend/utils/db.js
import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not set');
  }

  await mongoose.connect(process.env.MONGO_URI, {
    // (Optional) fine-tune options here
  });

  isConnected = true;
  console.log('✅ MongoDB connected');
};
