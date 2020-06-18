import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Food, InterfaceFood } from './food.model';

@Injectable()
export class FoodService {
  constructor(@InjectModel('foods') private foodModel: Model<Food>) {}

  getFoods(obj = {}) {
    return this.foodModel
      .find(obj)
      .populate('ingredients', 'name')
      .populate('foodType');
  }

  addFood(food: InterfaceFood) {
    return this.foodModel.create(food);
  }

  updateFood(food: InterfaceFood) {
    return this.foodModel.update({ _id: food._id }, food);
  }

  removeFood(_id: string) {
    return this.foodModel.deleteOne({ _id });
  }
}
