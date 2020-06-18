import { Injectable } from '@nestjs/common';
import { FoodType, InterfaceFoodType } from './food-type.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FoodTypeService {
  constructor(
    @InjectModel('food-types') private foodTypeModel: Model<FoodType>,
  ) {}
  getFoodTypes(obj = {}) {
    return this.foodTypeModel.find(obj);
  }
  addFoodType(obj: InterfaceFoodType) {
    return this.foodTypeModel.create(obj);
  }
  updateFoodType(obj: InterfaceFoodType) {
    return this.foodTypeModel.update({ _id: obj._id }, obj);
  }
  removeFoodType(_id: string) {
    return this.foodTypeModel.deleteOne({ _id });
  }
}
