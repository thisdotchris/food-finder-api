import { Module } from '@nestjs/common';
import { IngredientController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientSchema } from './ingredient.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ingredients', schema: IngredientSchema },
    ]),
  ],
  controllers: [IngredientController],
  providers: [IngredientService],
})
export class IngredientModule {}
