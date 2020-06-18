import { InterfaceFoodType } from './food-type.model';
import {
  Controller,
  Get,
  UnauthorizedException,
  Body,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { FoodTypeService } from './food-type.service';

@Controller('v1/food-types')
export class FoodTypeController {
  constructor(private readonly typeService: FoodTypeService) {}

  @Get()
  async getAllFoodType() {
    try {
      return await this.typeService.getFoodTypes({});
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
  @Post()
  async addFoodType(@Body() newType: InterfaceFoodType) {
    try {
      return this.typeService.addFoodType(newType);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
  @Put()
  async updateFoodType(@Body() newType: InterfaceFoodType) {
    try {
      return this.typeService.updateFoodType(newType);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
  @Delete(':_id')
  async deleteFoodType(@Param() _id: string) {
    try {
      return this.typeService.removeFoodType(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
