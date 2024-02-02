import mongoose from 'mongoose';

export default async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL ?? '');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
