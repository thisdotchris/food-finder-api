import { Schema, Document } from 'mongoose';

export class Ingredient extends Document {
  constructor(
    private name: string,
    private imgPath: string,
    private selected: boolean,
  ) {
    super();
  }
}

export interface InterfaceIngredient {
  _id: string;
  name: string;
  imgPath: string;
  selected: boolean;
}

export const IngredientSchema = new Schema({
  name: String,
  imgPath: String,
  selected: Boolean,
});
