import { ErrorHandler } from './ErrorHandler.js';

const BASE_URL = 'https://geocode.search.hereapi.com/v1/';
const HERE_MAPS_API_KEY = process.env.HERE_MAPS_API_KEY;
if (!HERE_MAPS_API_KEY) {
  throw new ErrorHandler('Api key not found.', 401);
}

export const geocode = async (address) => {
  const url = `${BASE_URL}/geocode?q=${address}&limit=1&apiKey=${HERE_MAPS_API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.items[0];
  } catch (error) {
    throw new ErrorHandler(error.message, 500);
  }
};

export const geometry = async (address) => {
  try {
    const { position } = await geocode(address);
    return {
      type: 'Point',
      coordinates: [position.lng, position.lat],
    };
  } catch (error) {
    throw new ErrorHandler(error.message, 500);
  }
};
