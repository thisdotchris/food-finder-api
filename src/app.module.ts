import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FoodTypeModule } from './food-type/food-type.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/project-ii'),
    FoodModule,
    IngredientModule,
    FoodTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
