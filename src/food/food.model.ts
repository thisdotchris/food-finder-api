import { InterfaceIngredient } from './../ingredient/ingredient.model';
import { Schema, Document } from 'mongoose';

export class Food extends Document {
  constructor(
    private name: string,
    private imgPath: string,
    private ingredients: any[],
    private foodType: string,
    private calories: number,
    private procedure: string,
  ) {
    super();
  }
}

export interface InterfaceFood {
  _id: string;
  name: string;
  imgPath: string;
  ingredients: string[];
  foodType: string;
  calories: number;
  procedure: string;
}

export const FoodSchema = new Schema({
  name: String,
  imgPath: String,
  ingredients: [
    {
      ref: 'ingredients',
      type: String,
    },
  ],
  foodType: {
    type: String,
    ref: 'food-types',
  },
  calories: Number,
  procedure: String,
});
