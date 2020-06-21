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
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,
      {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
      },
    ),
    FoodModule,
    IngredientModule,
    FoodTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
