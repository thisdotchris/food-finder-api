import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';
import { FoodSchema } from './food.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'foods', schema: FoodSchema }])],
  controllers: [FoodController],
  providers: [FoodService],
})
export class FoodModule {}
