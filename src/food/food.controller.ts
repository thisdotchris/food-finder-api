import {
  Controller,
  Get,
  UnauthorizedException,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FoodService } from './food.service';
import { InterfaceFood } from './food.model';
import multerStorage from 'src/file-upload.service';

@Controller('v1/foods')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  async getFoods() {
    try {
      return await this.foodService.getFoods();
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('img', { storage: multerStorage }))
  async addFood(@UploadedFile() img, @Body('param') param: string) {
    try {
      const { PORT, HOST } = process.env;
      const newFood: InterfaceFood = JSON.parse(param);
      return await this.foodService.addFood({
        ...newFood,
        imgPath: `http://${HOST}:${PORT}/uploads/${img.filename}`,
      });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Put()
  @UseInterceptors(FileInterceptor('img', { storage: multerStorage }))
  async updateFood(@UploadedFile() img, @Body('param') param: string) {
    try {
      const { PORT, HOST } = process.env;
      const newFood: InterfaceFood = JSON.parse(param);
      return await this.foodService.updateFood({
        ...newFood,
        imgPath:
          img && img.filename
            ? `http://${HOST}:${PORT}/uploads/${img.filename}`
            : newFood.imgPath,
      });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':_id')
  async removeFood(@Param('_id') _id: string) {
    try {
      return this.foodService.removeFood(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post('generate')
  async generateFoods(@Body('ids') ids: Array<string>) {
    try {
      return this.foodService.getFoods({ ingredients: { $in: ids } });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
