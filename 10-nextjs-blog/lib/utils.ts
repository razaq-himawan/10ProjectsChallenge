import mongoose, { type ConnectionStates } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error('MONGODB url must exist');
}

const connection: { isConnected: ConnectionStates } = {
  isConnected: 99,
};

export const connectToDb = async () => {
  try {
    if (connection.isConnected === 1) {
      console.log('Using existing connection');
      return;
    }
    const db = await mongoose.connect(MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.error(err);
    throw new Error('err');
  }
};
