import { FoodTypeSchema } from './food-type.model';
import { Module } from '@nestjs/common';
import { FoodTypeService } from './food-type.service';
import { FoodTypeController } from './food-type.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'food-types', schema: FoodTypeSchema }]),
  ],
  controllers: [FoodTypeController],
  providers: [FoodTypeService],
})
export class FoodTypeModule {}
