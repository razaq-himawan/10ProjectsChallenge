import mongoose, { ConnectionStates, type Connection } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error('MONGODB url must exist');
}

let db: Connection | null = null;

export const connectToDb = async () => {
  try {
    if (db && db.readyState === ConnectionStates.connected) {
      console.log('Using existing connection');
      return;
    }

    const newDb = await mongoose.connect(MONGODB_URL);
    db = newDb.connection;

    // Check connection status after connecting
    if (db.readyState !== ConnectionStates.connected) {
      throw new Error('Failed to connect to MongoDB');
    }
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw new Error('Error connecting to MongoDB');
  }
};
