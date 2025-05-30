import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarSchema } from './car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Car', schema: CarSchema }])],
  controllers: [CarController],
})
export class CarModule {}
