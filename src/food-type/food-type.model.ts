import { Schema, Document } from 'mongoose';

export class FoodType extends Document {
  constructor(private name: string) {
    super();
  }
}

export interface InterfaceFoodType {
  _id: string;
  name: string;
}

export const FoodTypeSchema = new Schema({
  name: String,
});
