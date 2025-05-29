import { Schema } from 'mongoose';

export const CarSchema = new Schema({
  name: String,
  model: String,
  engine: String,
  year: Number,
  color: String,
  price: Number,
  mileage: Number,
  image: String,
});
