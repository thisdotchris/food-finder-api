import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InterfaceIngredient, Ingredient } from './ingredient.model';
import { Model } from 'mongoose';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel('ingredients') private ingredientModel: Model<Ingredient>,
  ) {}

  getIngredients(obj = {}) {
    return this.ingredientModel.find(obj);
  }

  addIngredient(obj: InterfaceIngredient) {
    return this.ingredientModel.create(obj);
  }

  updateIngredient(obj: InterfaceIngredient) {
    return this.ingredientModel.update({ _id: obj._id }, obj);
  }

  removeIngredient(_id: string) {
    return this.ingredientModel.deleteOne({ _id });
  }
}
