import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseInterceptors,
  UploadedFile,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { InterfaceIngredient } from './ingredient.model';
import multerStorage from 'src/file-upload.service';

@Controller('v1/ingredients')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  async getIngredients() {
    try {
      return await this.ingredientService.getIngredients();
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Get(':_id')
  async getIngredient(@Param('_id') _id: string) {
    try {
      return await this.ingredientService.getIngredients({ _id });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('img', { storage: multerStorage }))
  async createIngredient(@UploadedFile() img, @Body('param') param: string) {
    try {
      const { PORT, HOST } = process.env;
      const newIngredient: InterfaceIngredient = JSON.parse(param);
      return await this.ingredientService.addIngredient({
        ...newIngredient,
        imgPath: `http://${HOST}:${PORT}/uploads/${img.filename}`,
      });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Put()
  @UseInterceptors(FileInterceptor('img'))
  async updateIngredient(@UploadedFile() img, @Body('param') param: string) {
    try {
      const { PORT, HOST } = process.env;
      const newIngredient: InterfaceIngredient = JSON.parse(param);
      return await this.ingredientService.updateIngredient({
        ...newIngredient,
        imgPath:
          img && img.filename
            ? `http://${HOST}:${PORT}/uploads/${img.filename}`
            : newIngredient.imgPath,
      });
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  @Delete(':_id')
  async deleteIngredient(@Param('_id') _id: string) {
    try {
      return await this.ingredientService.removeIngredient(_id);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
